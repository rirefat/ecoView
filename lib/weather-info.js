// Get weather info
export const weatherInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);

        const data = response.json();
        return data?.weather[0];
    } catch (error) {
        console.error(error.message)
    }
};


// Get temperature info
export const temperatureInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);

        const data = response.json();
        return data?.main;
    } catch (error) {
        console.error(error.message)
    }
};