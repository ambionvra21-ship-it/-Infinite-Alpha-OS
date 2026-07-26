// ==========================================
// 🌤 INFINITY ALPHA OS
// Weather Module v2.0
// ==========================================

console.log("🌤 Weather Module v2.0 Loaded");

const Weather = {

    data: {
        city: "--",
        temperature: "--",
        humidity: "--",
        wind: "--",
        condition: "Loading...",
        code: 0,
        updated: ""
    },

    async init(){

        console.log("📍 Detecting location...");

        if(!navigator.geolocation){

            this.showError("Geolocation not supported.");
            return;

        }

        navigator.geolocation.getCurrentPosition(

            (position)=>{

                this.load(
                    position.coords.latitude,
                    position.coords.longitude
                );

            },

            ()=>{

                this.showError("Location permission denied.");

            }

        );

    },

    async load(lat,lon){

        try{

            // WEATHER
            const weatherResponse =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
            );

            const weather =
            await weatherResponse.json();

            // CITY NAME
            const locationResponse =
            await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
            );

            const location =
            await locationResponse.json();

            this.data.city =
                location.city ||
                location.locality ||
                location.principalSubdivision ||
                "Unknown";

            this.data.temperature =
                Math.round(weather.current.temperature_2m);

            this.data.humidity =
                weather.current.relative_humidity_2m;

            this.data.wind =
                weather.current.wind_speed_10m;

            this.data.code =
                weather.current.weather_code;

            this.data.condition =
                this.describe(weather.current.weather_code);

            this.data.updated =
                new Date().toLocaleTimeString();

            this.render();

            console.log("🌤 Weather Loaded", this.data);

        }

        catch(error){

            console.error(error);

            this.showError("Unable to load weather.");

        }

    },

    render(){

        document.getElementById("weatherTemp").textContent =
            this.data.temperature + "°C";

        document.getElementById("weatherCity").textContent =
            "📍 " + this.data.city;

        document.getElementById("weatherDesc").textContent =
            this.data.condition;

        document.getElementById("humidity").textContent =
            this.data.humidity + "%";

        document.getElementById("wind").textContent =
            this.data.wind + " km/h";

    },

    describe(code){

        if(code===0) return "☀️ Clear Sky";
        if(code<=3) return "⛅ Partly Cloudy";
        if(code<=48) return "🌫 Fog";
        if(code<=67) return "🌧 Rain";
        if(code<=82) return "🌦 Showers";
        if(code<=99) return "⛈ Thunderstorm";

        return "Unknown";

    },

    showError(message){

        document.getElementById("weatherCity").textContent = message;

    }

};

window.Weather = Weather;
