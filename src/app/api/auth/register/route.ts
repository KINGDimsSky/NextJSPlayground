import { NextResponse, NextRequest } from "next/server";

export async function POST(request : NextRequest){
    return NextResponse.json({status : 200, message: "Succes"}, {status: 200})
}
