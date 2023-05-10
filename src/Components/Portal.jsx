import React from "react";
import logo from '../assets/small logo.png'
import {  Link } from "react-router-dom";

function Portal(){
    return (
        <div className="portal h-screen brightness-75 text-white flex flex-col justify-center items-center  gap-y-4">

        <section className="flex gap-8 justify-center">
         <img className="h-11" src={logo} />
         <p className="font-bold lg:text-6xl text-2xl">Victoria Schools</p>
         </section>

        <p className="text-lg">We believe that we have the power to shape the future, for the better.</p>

        <p className="flex justify-center text-lg">2022 / 2023 Students Portal</p>


        <section className="flex gap-8 justify-center">
       <Link to="/portalsignup"><button className='bg-[#0d2935] px-2 py-2 rounded text-lg'>Sign Up</button></Link>
       <Link to="/portalLogin"><button className='bg-[#0d2935] px-2 py-2 rounded text-lg'>Login</button></Link>
        </section>
            </div>


    )
}

export default Portal
