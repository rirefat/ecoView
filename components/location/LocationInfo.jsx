import { getLocationInfo } from "@/lib/location-info";

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
                    {/* <div className="relative">
                        <button>
                            <Image
                                className="size-9"
                                src="/icons/link.svg"
                                alt="link icon"
                                width={75}
                                height={75}
                            />
                        </button>
                        <div
                            className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2"
                        >
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                            >
                                <li>Kolkata</li>
                                <li>Dhaka</li>
                                <li>London</li>
                                <li>Amsterdam</li>
                            </ul>
                        </div>
                    </div> */}
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