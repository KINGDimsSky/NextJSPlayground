import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware (request: NextRequest) {
        const token = await getToken({
          req: request,
          secret: process.env.AUTH_SECRET
        })

        if (!token){
          return NextResponse.redirect(new URL('/login', request.url))
        }

        if (request.nextUrl.pathname.startsWith('/dashboard') && token.role !== 'admin'){
          return NextResponse.redirect(new URL ('/login', request.url))
        }

        return NextResponse.next();

}

export const config = {
    matcher : ['/about/:path*', '/dashboard']
}

