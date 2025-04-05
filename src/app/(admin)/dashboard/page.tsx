'use client'

import { useSession } from "next-auth/react"

export default function DashboardPage () {
    const {data: session, status} = useSession() 

    if (status === "loading") {
        return <p>...Loading</p>
    }

    return (
        <div className="w-full h-96 bg-gray-300 rounded-xl flex justify-center items-center">
            <h2>Dashboard</h2>
        </div>
    )
}