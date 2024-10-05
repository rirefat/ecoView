import { getLocationInfo } from "@/lib/location-info";
import LocationSwitcher from "./LocationSwitcher";

const LocationInfo = async ({ lat, lon }) => {
    const { continent, countryName, city } = await getLocationInfo(lat, lon);

    return (
        <div
            className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9"
        >
            <div>
                <div className="mb-2 flex items-center gap-2">
                    <h2
                        className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]"
                    >
                        {continent}
                    </h2>

                    {/* switcher */}
                    <LocationSwitcher/>
                </div>
                <p className="text-lg text-[#293A4E] lg:text-xl font-semibold">
                    {countryName} | {city}
                </p>
                <div
                    className="flex items-center gap-2 text-xs text-[#141d27] lg:text-sm"
                >
                    <span>{new Date().toLocaleTimeString()}</span>{", "}
                    <span>{new Date().toDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;