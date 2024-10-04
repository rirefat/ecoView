import Image from "next/image";
import Card from "../Card";
import { getWindInfo } from "@/lib/weather-info";

const WindComponent =async ({ lat, lon }) => {
    const res = await getWindInfo(lat, lon);
    console.log(res)

    return (
        <Card>
            <h6 class="feature-name">Wind Condition</h6>
            <div class="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_wind.png"
                    alt="rain icon"
                    width={25}
                    height={25}
                />
                <h3 class="feature-title">{res?.speed} km/h</h3>
                <span class="feature-name">Moderate Rain</span>
            </div>
        </Card>
    );
};

export default WindComponent;