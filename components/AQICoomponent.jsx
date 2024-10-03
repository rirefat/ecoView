import { getAQIInfo } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";


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
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Air Quality Index
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {aqiStatus}
                    </span>
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Carbon Monoxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                        {components?.co} µg/m³
                    </span>
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Nitric Oxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base" >
                        {components?.no} ppm
                    </span >
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Nitrogen Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base" >
                        {components?.no2} ppm</span >
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Ozone
                    </div>
                    <span className="text-right text-sm text-white lg:text-base" >
                        {components?.o3} µg/m³
                    </span >
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        Sulfur Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base" >
                        {components?.so2} ppm
                    </span >
                </div>
                {/* <!-- item ends --> */}
                {/* <!-- item --> */}
                <div className="flex items-center justify-between gap-4">
                    <div
                        className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base"
                    >
                        <Image
                            height={25}
                            width={25}
                            className="max-w-[18px]"
                            src="/icons/icon_air_element.png"
                            alt="icon"
                        />
                        PM2.5
                    </div>
                    <span className="text-right text-sm text-white lg:text-base" >
                        {components?.pm2_5} µg/m³
                    </span>
                </div>
                {/* <!-- item ends --> */}
            </div>
        </Card>
    );
};

export default AQICoomponent;