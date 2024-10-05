import InvalidLocation from "@/components/InvalidLocation";
import LocationInfo from "@/components/location/LocationInfo";
import { getResolvedLocation } from "@/lib/location-info";

export default async function HomePage({
    params: { location },
    searchParams: { latitude, longitude }
}) {

    const resolvedLocation = await getResolvedLocation(location, latitude, longitude);

    if (resolvedLocation?.lat && resolvedLocation?.lon) {
        return <LocationInfo lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
    } else {
        return <InvalidLocation />
    }
}