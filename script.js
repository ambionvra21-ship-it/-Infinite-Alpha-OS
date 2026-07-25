// ==========================================
// ☀️ ALPHA WEATHER ENGINE V2
// ==========================================

async function loadWeather() {

    const temp = document.getElementById("weatherTemp");
    const city = document.getElementById("weatherCity");
    const desc = document.getElementById("weatherDesc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    city.textContent = "📍 Detecting location...";
    desc.textContent = "Please wait...";

    if (!navigator.geolocation) {

        city.textContent = "GPS not supported";
        return;

    }

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {

                // Reverse Geocoding
                const geoResponse = await fetch(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
                );

                const geo = await geoResponse.json();

                // Weather
                const weatherResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
                );

                const weather = await weatherResponse.json();

                temp.textContent =
                    Math.round(weather.current.temperature_2m) + "°C";

                city.textContent =
                    "📍 " +
                    (geo.city ||
                    geo.locality ||
                    geo.principalSubdivision ||
                    "Current Location");

                desc.textContent =
                    "Live Weather";

                humidity.textContent =
                    weather.current.relative_humidity_2m + "%";

                wind.textContent =
                    weather.current.wind_speed_10m + " km/h";

            }

            catch (error) {

                console.log(error);

                city.textContent = "Unable to load weather";

                desc.textContent = "";

            }

        },

        () => {

            city.textContent =
                "Location permission denied";

            desc.textContent =
                "Please allow location access.";

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

    );

}

// ==========================================
// 🔍 SEARCH WEATHER
// ==========================================

async function searchWeatherByCity() {

    const cityInput =
        document.getElementById("citySearch").value.trim();

    if (cityInput === "") {

        loadWeather();
        return;

    }

    const temp = document.getElementById("weatherTemp");
    const city = document.getElementById("weatherCity");
    const desc = document.getElementById("weatherDesc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    city.textContent = "Searching...";

    try {

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput)}&count=1`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results) {

            city.textContent = "City not found";
            return;

        }

        const place = geoData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );

        const weather = await weatherResponse.json();

        temp.textContent =
            Math.round(weather.current.temperature_2m) + "°C";

        city.textContent =
            "📍 " + place.name + ", " + place.country;

        desc.textContent =
            "Live Weather";

        humidity.textContent =
            weather.current.relative_humidity_2m + "%";

        wind.textContent =
            weather.current.wind_speed_10m + " km/h";

    }

    catch (error) {

        console.log(error);

        city.textContent = "Unable to search";

    }

}
