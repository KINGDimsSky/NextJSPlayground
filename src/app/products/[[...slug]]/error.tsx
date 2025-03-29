'use client'

import { useEffect } from "react"

export default function Error({error, reset} : {error : Error, reset: () => void }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <h2 className="text-4xl">Error Anjay!</h2>
            <button className="bg-pink-400 py-2 px-4 mt-4 rounded-3xl" onClick={() => reset()}>Try Again</button>
        </div>
    )
}