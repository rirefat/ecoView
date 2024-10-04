import Image from "next/image";
import Card from "../Card";

const CurrentWeather = ({lat, lon}) => {
    return (
        <Card>
            <h6 class="feature-name">Current Weather</h6>
            <div class="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_rain.png"
                    alt="rain icon"
                    width={25}
                    height={25}
                />
                <h3 class="feature-title">Rain</h3>
                <span class="feature-name">Moderate Rain</span>
            </div>
        </Card>
    );
};

export default CurrentWeather;