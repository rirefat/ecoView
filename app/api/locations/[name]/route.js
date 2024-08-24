import { NextResponse } from "next/server";
import { getLocationByName } from "../locationsData";

export async function GET(request, { params: { name } }) {
    const location = getLocationByName(name);
    return NextResponse.json(location);
}