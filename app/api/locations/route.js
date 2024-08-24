import { NextResponse } from "next/server";
import { getLocations } from "./locationsData";

export async function GET() {
    const allLocations = getLocations();
    return NextResponse.json(allLocations);
}