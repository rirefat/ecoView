import InvalidLocation from "@/components/InvalidLocation";
import CurrentWeather from "@/components/weather/CurrentWeather";
import { getResolvedLocation } from "@/lib/location-info";


const WeatherPage =async ({
    params: {location},
    searchParams: {latitude, longitude}
}) => {

    const resolvedLocation = await getResolvedLocation(location, latitude, longitude);

    if (resolvedLocation?.lat && resolvedLocation?.lon) {
        return <CurrentWeather lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
    } else {
        return <InvalidLocation />
    }
}

export default WeatherPage;