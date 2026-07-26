// ==========================================
// ☀️ INFINITY ALPHA WEATHER MODULE v1
// ==========================================

console.log("☀️ Weather Module Loaded");

async function loadWeather() {

    const temp = document.getElementById("weatherTemp");
    const city = document.getElementById("weatherCity");
    const desc = document.getElementById("weatherDesc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    if (!temp || !city) {

        console.log("Weather elements not found.");
        return;

    }

    city.textContent = "📍 Detecting location...";
    desc.textContent = "Loading weather...";

    if (!navigator.geolocation) {

        city.textContent = "Geolocation not supported.";
        return;

    }

    navigator.geolocation.getCurrentPosition(

        async(position)=>{

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try{

                const weatherResponse =
                await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
                );

                const weather =
                await weatherResponse.json();

                const locationResponse =
                await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
                );

                const location =
                await locationResponse.json();

                const place =
                location.city ||
                location.locality ||
                location.principalSubdivision ||
                "Current Location";

                temp.textContent =
                Math.round(weather.current.temperature_2m) + "°C";

                city.textContent =
                "📍 " + place;

                desc.textContent =
                weatherDescription(weather.current.weather_code);

                humidity.textContent =
                weather.current.relative_humidity_2m + "%";

                wind.textContent =
                weather.current.wind_speed_10m + " km/h";

            }

            catch(error){

                console.log(error);

                city.textContent =
                "Weather service unavailable.";

                desc.textContent =
                "Please refresh later.";

            }

        },

        ()=>{

            city.textContent =
            "Location permission denied.";

            desc.textContent =
            "Enable GPS access.";

        }

    );

}

function weatherDescription(code){

    if(code===0) return "☀️ Clear Sky";
    if(code<=3) return "⛅ Partly Cloudy";
    if(code<=48) return "🌫 Fog";
    if(code<=67) return "🌧 Rain";
    if(code<=82) return "🌦 Showers";
    if(code<=99) return "⛈ Thunderstorm";

    return "Weather";

}
