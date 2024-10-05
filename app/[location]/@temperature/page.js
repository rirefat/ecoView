import InvalidLocation from "@/components/InvalidLocation";
import TemperatureComponent from "@/components/temperature/TemperatureComponent"

const TemperaturePage =async ({
  params: { location },
  searchParams: { latitude, longitude }
}) => {

  const resolvedLocation = await getResolvedLocation(location, latitude, longitude);

  if (resolvedLocation?.lat && resolvedLocation?.lon) {
      return <TemperatureComponent lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />;
  } else {
      return <InvalidLocation />
  }
}

export default TemperaturePage