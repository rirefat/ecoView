import LocationDetector from "@/components/location/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationDetector />
    </Suspense>
  );
}