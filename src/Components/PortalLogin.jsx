import React from "react";
import logo from '../assets/small logo.png'

function PortalLogin(){
    return (
        <div className='portal h-screen brightness-75 flex justify-center py-8'>
            <section className="bg-gray-400 portal-signup flex flex-col  w-96 px-8 py-4">
            <p className="text-center mx-auto"><img className='h-11' src={logo}/></p>
            <p className="text-center text-2xl font-semibold">LOG IN</p>

            <form className='flex flex-col gap-4' >

            <section className="flex flex-col gap-2">
             <label htmlFor="email">Email</label>
             <input
              className='p-0.5 rounded'
             type="email"
             name="email"
             required
             
              />
              </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="password">Password</label>
             <input
              className='p-0.5 rounded'
             type="password"
             name="password"
             required
             
              />
              </section>

              <button className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Log in</button>

            </form>
        
        </section>
        </div>
    )
}

export default PortalLogin