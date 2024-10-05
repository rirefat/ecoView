import LocationInfo from "@/components/location/LocationInfo";
import Image from "next/image";

export default function HomePage({
    params: { location },
    searchParams: { latitude, longitude }
}) {
    return <LocationInfo lat={latitude} lon={longitude} />;
}