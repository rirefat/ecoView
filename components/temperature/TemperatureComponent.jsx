import { getTemperatureInfo } from "@/lib/weather-info";
import Card from "../Card";
import Image from "next/image";


const TemperatureComponent = async ({ lat, lon }) => {
    const {temp, feels_like} = await getTemperatureInfo(lat, lon);

    return (
        <Card>
            <h6 class="feature-name">Current Temperature</h6>
            <div class="feature-main">
                <Image
                    class="max-w-20"
                    src="/icons/icon_tempareture.png"
                    alt="rain icon"
                    width={25}
                    height={25}
                />
                <h3 class="feature-title">{temp}°C</h3>

                <span class="feature-name">Feels Like {feels_like}°C</span>
            </div>
        </Card>
    );
};

export default TemperatureComponent;