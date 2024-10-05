import InvalidLocation from '@/components/InvalidLocation';
import WindComponent from '@/components/wind/WindComponent';
import { getResolvedLocation } from '@/lib/location-info';
import React from 'react';

const WindPage = async ({
    params: { location },
    searchParams: { latitude, longitude }
}) => {

    const resolvedLocation = await getResolvedLocation(location, latitude, longitude);

    if (resolvedLocation?.lat && resolvedLocation?.lon) {
        return <WindComponent lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
    } else {
        return <InvalidLocation />
    }
}

export default WindPage;