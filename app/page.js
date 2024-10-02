import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationDetector />
    </Suspense>
  );
}