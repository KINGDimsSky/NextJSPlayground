import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest){
    const tag = request.nextUrl.searchParams.get('tag')
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.SECRET_TOKEN) {
        return NextResponse.json({status: 402, message: "Invalid Secret Key!",},{
            status : 402
        })
    }

    if (!tag) {
        return NextResponse.json({status: 404, message: "Missing tag params!"}, {
            status: 404
        })
    }

    revalidateTag(tag)
    return NextResponse.json({revalidate: true, now: Date.now()})
}