// ==========================================
// 🌤 INFINITY ALPHA OS
// Weather Module v4.0 CLEAN CITY FIX
// ==========================================

console.log("🌤 Weather Module v4.0 Loaded");


const Weather = {

    data: null,


    init() {

        console.log("🚀 Weather Starting...");
        console.log("📍 Requesting location...");


        if (!navigator.geolocation) {

            this.showError(
                "Geolocation not supported"
            );

            return;

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
                    "GPS ERROR:",
                    error
                );


                this.showError(
                    "Location permission denied"
                );

            },


            {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 60000
            }

        );


    },


    async load(lat, lon) {


        try {


            console.log(
                "🌤 Loading weather..."
            );


            const weatherResponse =
                await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`

                );


            const weather =
                await weatherResponse.json();



            console.log(
                "✅ Weather Data:",
                weather
            );



            console.log(
                "📍 Finding city..."
            );



            const cityResponse =
                await fetch(

`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`

                );



            const location =
                await cityResponse.json();



            console.log(
                "📍 Location Data:",
                location
            );



            const cityName =

                location.city ||

                location.locality ||

                location.principalSubdivision ||

                location.localityInfo
                ?.administrative
                ?.find(
                    item => item.name
                )
                ?.name ||

                location.countryName ||

                "Current Location";



            console.log(
                "🏙 City:",
                cityName
            );



            this.data = {


                city:
                    cityName,


                temperature:
                    Math.round(
                        weather.current.temperature_2m
                    ),


                humidity:
                    weather.current.relative_humidity_2m,


                wind:
                    weather.current.wind_speed_10m,


                condition:
                    this.describe(
                        weather.current.weather_code
                    )

            };



            this.render();



            console.log(
                "🌤 Weather Ready:",
                this.data
            );



        }


        catch(error) {


            console.error(
                "WEATHER ERROR:",
                error
            );


            this.showError(
                "Weather unavailable"
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


        const temp =
            document.getElementById(
                "weatherTemp"
            );


        const desc =
            document.getElementById(
                "weatherDesc"
            );


        if(city)
            city.textContent =
            message;


        if(temp)
            temp.textContent =
            "--°C";


        if(desc)
            desc.textContent =
            "--";


    }


};



// Make available to Alpha Engine

window.Weather = Weather;
