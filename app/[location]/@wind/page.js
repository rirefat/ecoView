import WindComponent from '@/components/wind/WindComponent';
import React from 'react';

const WindPage = ({
    params: { location },
    searchParams: { latitude, longitude }
}) => {
    return <WindComponent lat={latitude} long={longitude} />;
};

export default WindPage;