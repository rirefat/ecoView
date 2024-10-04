import Image from "next/image";
import Card from "../Card";
import { getWeatherInfo } from "@/lib/weather-info";

const CurrentWeather = async ({ lat, lon }) => {
    const { main, description, icon } = await getWeatherInfo(lat, lon);
    
    return (
        <Card>
            <h6 class="feature-name">Current Weather</h6>
            <div class="feature-main">
                <Image
                    className="max-w-20"
                    src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                    alt="rain icon"
                    width={50}
                    height={50}
                />
                <h3 class="feature-title">{main}</h3>
                <span class="feature-name capitalize">{description}</span>
            </div>
        </Card>
    );
};

export default CurrentWeather;