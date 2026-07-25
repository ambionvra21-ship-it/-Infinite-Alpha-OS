// ==========================================
// ☀️ ALPHA WEATHER ENGINE V2
// ==========================================

async function loadWeather() {

    const temp = document.getElementById("weatherTemp");
    const city = document.getElementById("weatherCity");
    const desc = document.getElementById("weatherDesc");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    if (!temp) return;

    city.textContent = "Detecting location...";
    desc.textContent = "Please wait...";

    if (!navigator.geolocation) {

        city.textContent = "GPS not supported";
        return;

    }

    navigator.geolocation.getCurrentPosition(

        async function(position){

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try{

                // Reverse Geocoding
                const geoResponse = await fetch(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
                );

                const geo = await geoResponse.json();

                const place =
                    geo.city ||
                    geo.locality ||
                    geo.principalSubdivision ||
                    "Current Location";

                // Weather
                const weatherResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
                );

                const weather = await weatherResponse.json();

                temp.textContent =
                    Math.round(weather.current.temperature_2m) + "°C";

                city.textContent =
                    "📍 " + place;

                humidity.textContent =
                    weather.current.relative_humidity_2m + "%";

                wind.textContent =
                    weather.current.wind_speed_10m + " km/h";

                desc.textContent =
                    getWeatherDescription(weather.current.weather_code);

            }

            catch(error){

                console.error(error);

                city.textContent = "Weather unavailable";

            }

        },

        function(){

            city.textContent = "Location permission denied";
            desc.textContent = "Allow Location and refresh.";

        },

        {
            enableHighAccuracy:true,
            timeout:10000,
            maximumAge:60000
        }

    );

}

function getWeatherDescription(code){

    if(code===0) return "☀️ Clear Sky";

    if(code<=3) return "⛅ Partly Cloudy";

    if(code<=48) return "🌫 Fog";

    if(code<=67) return "🌧 Rain";

    if(code<=77) return "❄️ Snow";

    if(code<=82) return "🌦 Showers";

    if(code<=99) return "⛈ Thunderstorm";

    return "Weather";
}
