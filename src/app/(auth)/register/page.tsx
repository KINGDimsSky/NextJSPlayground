'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage () {
  const router = useRouter()
  const [Error, SetError] = useState<string>('')
  const [IsLoading, SetIsLoading] = useState<Boolean>(false);

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      SetError("")
      SetIsLoading(true)
      if (e.currentTarget.password.value !== e.currentTarget.confirmpassword.value){
        SetError("Password Does'nt Match!")
        return SetIsLoading(false);
      }
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          fullname: e.currentTarget.fullname.value,
          email: e.currentTarget.email.value,
          password: e.currentTarget.password.value,
          confirmpassword: e.currentTarget.confirmpassword.value
        })
      })

      if (res.status === 200){
        SetError("")
        SetIsLoading(false)
        router.push('/login');
      }else {
        SetError("Email Already Exist!");
        SetIsLoading(false)
      }
    }

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900"> Sign Up to your account </h2>
          {Error !== "" && (
            <p className="mt-4 text-center font-bold text-red-600">{Error}</p>
          )}
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-6" onSubmit={(e) => handleSubmit (e)}>
          <div>
              <label htmlFor="fullname" className="block text-sm/6 font-medium text-gray-900"> Full Name </label>
              <div className="mt-2">
                <input id="fullname" name="fullname" type="text" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900"> Email address </label>
              <div className="mt-2">
                <input id="email" name="email" type="email" required autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900"> Password </label>
              <div className="mt-2">
                <input id="password" name="password" type="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
              </div>
            </div>
            <div>
                <label htmlFor="confirmpassword" className="block text-sm/6 font-medium text-gray-900"> Confirm Password </label>
              <div className="mt-2">
                <input id="confirmpassword" name="confirmpassword" type="password" required autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div>
              {IsLoading ? (<button type="button" className="flex w-full cursor-not-allowed justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Loading..</button>) 
              : <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>}
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500"> Have an Account ? {' '} <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500"> Login </Link></p>
        </div>
      </div>
    )
}