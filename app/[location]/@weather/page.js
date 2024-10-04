import CurrentWeather from "@/components/weather/CurrentWeather";


const WeatherPage = ({
    params: {location},
    searchParams: {latitude, longitude}
}) => {
    return <CurrentWeather lat={latitude} lon={longitude}/>;
};

export default WeatherPage;