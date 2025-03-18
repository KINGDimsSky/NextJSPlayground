"use client"
import { useState } from "react"

export default function AboutLayout ({children} : {children: React.ReactNode}) {

    const [state, SetState] = useState(0)

    return (
        <>
        <h2>Hello World {state}</h2>
        <h2 className="cursor-pointer" onClick={() => SetState(state + 1)}>Click</h2>
          <nav className="fixed p-2 flex flex-col gap-2 right-0 top-14 z-10 h-screen w-60 bg-gray-800">
            <h2 className="text-white">Home</h2>
            <h2 className="text-white">About</h2>
            <h2 className="text-white">Profile</h2>
          </nav>
          <div>{children}</div>
        </>
    )
}