import { getAQIInfo } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";
import AQISingleInfo from "./AQISingleInfo";


const AQICoomponent = async ({ lat, lon }) => {

    const { main, components } = await getAQIInfo(lat, lon);
    const aqiStatus = main.aqi === 1 ? "Good"
        : main?.aqi === 2 ? "Fair"
            : main?.aqi === 3 ? "Moderate"
                : main?.aqi === 4 ? "Poor"
                    : "Very Poor";


    return (
        <Card>
            <h6 className="feature-name">Air Pollution & Quality</h6>
            {/* <!-- info items --> */}
            <div className="mt-3 space-y-2 lg:space-y-3">

                {/* Air Quality Index */}
                <AQISingleInfo title={"Air Quality Index"} value={aqiStatus} />

                {/* Carbon Monoxide */}
                <AQISingleInfo title={"Carbon Monoxide"} value={components?.co} unit={'µg/m³'} />

                {/* Nitric Oxide */}
                <AQISingleInfo title={"Nitric Oxide"} value={components?.no} unit={'ppm'} />

                {/* Ozone */}
                <AQISingleInfo title={"Ozone"} value={components?.o3} unit={'µg/m³'} />

                {/* Nitric Dioxide */}
                <AQISingleInfo title={"Nitric Dioxide"} value={components?.no2} unit={'ppm'} />

                {/* Sulfur Dioxide */}
                <AQISingleInfo title={"Sulfur Dioxide"} value={components?.so2} unit={'ppm'} />

                {/* PM2.5 */}
                <AQISingleInfo title={"PM2.5"} value={components?.pm2_5} unit={'µg/m³'} />
            </div>
        </Card>
    );
};

export default AQICoomponent;