// ==========================================
// 🌤 INFINITY ALPHA OS
// Weather Module v3.0
// ==========================================

console.log("🌤 Weather Module v3.0 Loaded");

const Weather = {

    data: null,

    async init() {

        console.log("📍 Requesting location...");

        if (!navigator.geolocation) {
            return this.showError("Geolocation not supported.");
        }

        navigator.geolocation.getCurrentPosition(

            ({ coords }) => {
                console.log("✅ Location:", coords.latitude, coords.longitude);
                this.load(coords.latitude, coords.longitude);
            },

            (err) => {
                console.error("GPS Error:", err);
                this.showError("Location permission denied.");
            }

        );

    },

    async load(lat, lon) {

        try {

            console.log("🌤 Loading weather...");

            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
            );

            if (!weatherRes.ok)
                throw new Error("Weather API failed");

            const weather = await weatherRes.json();

            console.log("✅ Weather API:", weather);

            console.log("📍 Loading city...");

            const cityRes = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
            );

            if (!cityRes.ok)
                throw new Error("City API failed");

            const city = await cityRes.json();

            console.log("✅ City API:", city);

            this.data = {

                city:
                    city.city ||
                    city.locality ||
                    city.principalSubdivision ||
                    city.countryName ||
                    "Current Location",

                temperature:
                    Math.round(weather.current.temperature_2m),

                humidity:
                    weather.current.relative_humidity_2m,

                wind:
                    weather.current.wind_speed_10m,

                code:
                    weather.current.weather_code,

                condition:
                    this.describe(weather.current.weather_code),

                updated:
                    new Date().toLocaleTimeString()

            };

            this.render();

            console.log("🌤 Weather Ready", this.data);

        }

        catch (error) {

            console.error("Weather Error:", error);

            this.showError("Unable to load weather.");

        }

    },

    render() {

        document.getElementById("weatherTemp").textContent =
            `${this.data.temperature}°C`;

        document.getElementById("weatherCity").textContent =
            `📍 ${this.data.city}`;

        document.getElementById("weatherDesc").textContent =
            this.data.condition;

        document.getElementById("humidity").textContent =
            `${this.data.humidity}%`;

        document.getElementById("wind").textContent =
            `${this.data.wind} km/h`;

    },

    describe(code) {

        if (code === 0) return "☀️ Clear Sky";
        if (code <= 3) return "⛅ Partly Cloudy";
        if (code <= 48) return "🌫 Fog";
        if (code <= 67) return "🌧 Rain";
        if (code <= 82) return "🌦 Showers";
        if (code <= 99) return "⛈ Thunderstorm";

        return "Unknown";

    },

    showError(message) {

        console.error(message);

        document.getElementById("weatherCity").textContent = message;

        document.getElementById("weatherDesc").textContent = "--";

        document.getElementById("weatherTemp").textContent = "--°C";

    }

};

window.Weather = Weather;
