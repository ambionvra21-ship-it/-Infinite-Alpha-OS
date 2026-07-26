// ==========================================
// 🌤 INFINITY ALPHA OS
// Weather Module v1.0
// ==========================================

console.log("🌤 Weather Module v1.0 Loaded");

const Weather = {

    data: null,

    async init(){

        console.log("📍 Detecting location...");

        if(!navigator.geolocation){

            this.showError("Geolocation is not supported.");

            return;

        }

        navigator.geolocation.getCurrentPosition(

            (position)=>{

                this.loadWeather(
                    position.coords.latitude,
                    position.coords.longitude
                );

            },

            ()=>{

                this.showError(
                    "Location permission denied."
                );

            }

        );

    },

    async loadWeather(lat,lon){

        try{

            const response =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
            );

            const json =
            await response.json();

            this.data =
            json.current;

            this.render();

        }

        catch(error){

            console.error(error);

            this.showError(
                "Unable to load weather."
            );

        }

    },

    render(){

        document.getElementById("weatherTemp").innerHTML =
        Math.round(this.data.temperature_2m) + "°C";

        document.getElementById("humidity").innerHTML =
        this.data.relative_humidity_2m + "%";

        document.getElementById("wind").innerHTML =
        this.data.wind_speed_10m + " km/h";

        document.getElementById("weatherDesc").innerHTML =
        this.describe(this.data.weather_code);

        document.getElementById("weatherCity").innerHTML =
        "📍 Current Location";

    },

    describe(code){

        if(code===0) return "☀️ Clear Sky";
        if(code<=3) return "⛅ Partly Cloudy";
        if(code<=48) return "🌫 Fog";
        if(code<=67) return "🌧 Rain";
        if(code<=82) return "🌦 Showers";
        if(code<=99) return "⛈ Thunderstorm";

        return "Weather";

    },

    showError(message){

        document.getElementById("weatherCity").innerHTML =
        message;

    }

};

window.Weather = Weather;
