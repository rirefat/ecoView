export const getLocationInfo = async (lat, lon) => {
    try {
        const response = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const getLocationLatLonList = async () => {
    try {
        const response = await fetch(`https://ecoview.vercel.app/api/locations`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

export const getLocationLatLon = async (locationName) => {
    try {
        const response = await fetch(`https://ecoview.vercel.app/api/locations/${locationName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
}


export const getResolvedLocation = async (location, lat, lon) => {
    if (lat && lon) {
        return { lat, lon }
    }

    const locationLatLon = await getLocationLatLon(location);

    if (locationLatLon?.latitude && locationLatLon?.longitude) {
        const lat = locationLatLon?.latitude;
        const lon = locationLatLon?.longitude;

        return { lat, lon }
    }
}