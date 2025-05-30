'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const {data: session, status } = useSession()

    return (
        <div className="bg-black flex items-center justify-between py-2 px-5 z-50 mb-4">
            <div className="flex items-center gap-2 ml-6">
                <h2 className="text-4xl text-white mr-4">Navbar</h2>
                <Link href="/"><p className={`${pathname === '/' ? 'text-blue-300' : 'text-white'}`}>Home</p></Link>
                <Link href="/about"><p className={`${pathname === '/about' ? 'text-blue-300' : 'text-white'}`}>About</p></Link>
                <Link href="/about/profile"><p className={`${pathname === '/about/profile' ? 'text-blue-300' : 'text-white'}`}>Profile</p></Link>
            </div>
            {status === 'loading' ? (
                <p className="text-white">Loading ...</p>
            ): (session?.user ? (
                <div className="flex gap-3">
                    <p className="text-xl text-white">Hello {session?.user.name}</p>
                    <button onClick={() => signOut()} className="bg-white text-sm rounded-md px-3 cursor-pointer">LogOut</button>
                </div>
            ): (
                <button onClick={() => signIn()} className="bg-white text-sm rounded-md px-3 cursor-pointer">Login</button>
            ))}
           
        </div>
    )
}