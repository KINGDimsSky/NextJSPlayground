'use client'

import { useState } from "react"

export default function AdminPage() {
    const [status, setStatus] = useState<string>("")

    const revalidate = async () => {
        const res = await fetch('api/revalidate?tag=products&secret=Dimssky123', {
            method: 'POST'
        })

        if (!res.ok) {
            setStatus("Failed Revalidate")
        }else {
             setStatus("Succes Revalidate!")
        }
    }

    return (
        <div className="w-3/6 h-96 bg-gray-300 rounded-xl flex justify-center items-center">
            <h1>{status}</h1>
            <button onClick={revalidate} className="p-4 text-white bg-black cursor-pointer">revalidate</button>
        </div>
    )
}