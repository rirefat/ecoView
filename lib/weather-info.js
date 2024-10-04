// Get weather info
export const getWeatherInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.weather[0];
    } catch (error) {
        console.error(error.message)
    }
};


// Get temperature info
export const getTemperatureInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.main;
    } catch (error) {
        console.error(error.message)
    }
};


// Get wind info
export const getWindInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`);

        const data = await response.json();
        return data?.wind;
    } catch (error) {
        console.error(error.message)
    }
};


// Get Air Pollution Index or AQI info
export const getAQIInfo = async (lat, lon) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1606223802&end=1606482999&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`);

        const data = await response.json();
        return data?.list[0];
    } catch (error) {
        console.error(error.message)
    }
};