'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage () {
    const {data: session, status} = useSession() 
    const router = useRouter();
    console.log (session)
    console.log (status)

    useEffect(() => {
        if (status === "unauthenticated" || session?.user.role === "user") {
            router.push('/login')
        }
    }, [status, router, session?.user.role, session])

    if (status === "loading") {
        return <p>...Loading</p>
    }

    return (
        <div className="w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center">
            <h2>Dashboard</h2>
        </div>
    )
}