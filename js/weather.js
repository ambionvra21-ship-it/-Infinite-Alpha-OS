// ==========================================
// 🌤 INFINITY ALPHA OS
// Weather Module v3.1 CLEAN FIX
// ==========================================

console.log("🌤 Weather Module v3.1 Loaded");


const Weather = {

    data: null,


    async init() {

        console.log("📍 Requesting location...");


        if (!navigator.geolocation) {

            return this.showError(
                "Geolocation not supported."
            );

        }


        navigator.geolocation.getCurrentPosition(

            (position) => {

                const lat =
                    position.coords.latitude;

                const lon =
                    position.coords.longitude;


                console.log(
                    "✅ GPS:",
                    lat,
                    lon
                );


                this.load(lat, lon);

            },


            (error) => {

                console.error(
                    "GPS Error:",
                    error
                );


                this.showError(
                    "Location permission denied."
                );

            },


            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        );

    },


    async load(lat, lon) {


        try {


            console.log(
                "🌤 Loading weather..."
            );


            // WEATHER API

            const weatherResponse =
                await fetch(

                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`

                );


            const weather =
                await weatherResponse.json();


            console.log(
                "✅ Weather:",
                weather
            );



            // LOCATION API

            console.log(
                "📍 Finding city..."
            );


            const locationResponse =
                await fetch(

                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`

                );


            const location =
                await locationResponse.json();



            console.log(
                "📍 Location Data:",
                location
            );



            let cityName =

                location.city ||

                location.locality ||

                location.localityInfo?.administrative?.[2]?.name ||

                location.localityInfo?.administrative?.[1]?.name ||

                location.principalSubdivision ||

                location.countryName ||

                "Current Location";



            this.data = {


                city: cityName,


                temperature:
                    Math.round(
                        weather.current.temperature_2m
                    ),


                humidity:
                    weather.current.relative_humidity_2m,


                wind:
                    weather.current.wind_speed_10m,


                code:
                    weather.current.weather_code,


                condition:
                    this.describe(
                        weather.current.weather_code
                    ),


                updated:
                    new Date()
                    .toLocaleTimeString()

            };



            this.render();



            console.log(
                "🌤 Weather Ready:",
                this.data
            );


        }


        catch(error) {


            console.error(
                "Weather Error:",
                error
            );


            this.showError(
                "Unable to load weather."
            );

        }


    },



    render() {


        const temp =
            document.getElementById(
                "weatherTemp"
            );


        const city =
            document.getElementById(
                "weatherCity"
            );


        const desc =
            document.getElementById(
                "weatherDesc"
            );


        const humidity =
            document.getElementById(
                "humidity"
            );


        const wind =
            document.getElementById(
                "wind"
            );



        if(temp)

            temp.textContent =
            `${this.data.temperature}°C`;



        if(city)

            city.textContent =
            `📍 ${this.data.city}`;



        if(desc)

            desc.textContent =
            this.data.condition;



        if(humidity)

            humidity.textContent =
            `${this.data.humidity}%`;



        if(wind)

            wind.textContent =
            `${this.data.wind} km/h`;


    },



    describe(code) {


        if(code === 0)
            return "☀️ Clear Sky";


        if(code <= 3)
            return "⛅ Partly Cloudy";


        if(code <= 48)
            return "🌫 Fog";


        if(code <= 67)
            return "🌧 Rain";


        if(code <= 82)
            return "🌦 Showers";


        if(code <= 99)
            return "⛈ Thunderstorm";


        return "Unknown";

    },



    showError(message) {


        console.error(
            message
        );


        const city =
            document.getElementById(
                "weatherCity"
            );


        const desc =
            document.getElementById(
                "weatherDesc"
            );


        const temp =
            document.getElementById(
                "weatherTemp"
            );



        if(city)
            city.textContent =
            message;


        if(desc)
            desc.textContent =
            "--";


        if(temp)
            temp.textContent =
            "--°C";


    }


};



// Make available globally

window.Weather = Weather;
