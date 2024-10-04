import AQICoomponent from "@/components/aqi/AQICoomponent";

export default function AQIPage({
    params: { location },
    searchParams: { latitude, longitude }
}) {
    return (
        <AQICoomponent lat={latitude} lon={longitude} />
    );
}