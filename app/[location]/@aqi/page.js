import AQICoomponent from "@/components/AQICoomponent";

export default function AQIPage({
    params: { location },
    searchParams: { latitude, longitude }
}) {
    return (
        <AQICoomponent lat={latitude} lon={longitude} />
    );
}