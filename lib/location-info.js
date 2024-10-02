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