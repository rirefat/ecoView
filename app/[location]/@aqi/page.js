import AQICoomponent from "@/components/aqi/AQICoomponent";
import InvalidLocation from "@/components/InvalidLocation";
import { getResolvedLocation } from "@/lib/location-info";

export default async function AQIPage({
    params: { location },
    searchParams: { latitude, longitude }
}) {

    const resolvedLocation = await getResolvedLocation(location, latitude, longitude);

    if (resolvedLocation?.lat && resolvedLocation?.lon) {
        return <AQICoomponent lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
    } else {
        return <InvalidLocation />
    }
}