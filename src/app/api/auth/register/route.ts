import { Register } from "@/lib/firebase/services";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const result = await Register(res);
    return NextResponse.json({status: result.status, message: result.message}, {status: result.status})
}
