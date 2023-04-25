import React from "react";
import Future from '../assets/future.png'
import { GoQuote } from "react-icons/go";

function Motto() {

    return (
        <div className="mt-4  lg:flex lg:gap-8 lg:items-center">
            <img className="w-full object-cover lg:object-none lg:w-1/2 " src={Future} alt=""/>
            <div className="z-10 relative">
            <div className="absolute -z-1 mx-8"><GoQuote size="100" color="#e2e8f0"/></div>
            <p className="mt-4 text-2xl mt-4  font-semibold z-10 relative">Shaping the Future</p>
            <p className="text-slate-400 mt-8 text-base  lg:text-xl lg:mt-8 z-10 relative">At Victoria Schools, We are moving boldly - and concertedly - to expand tomorrow's frontiers.
                We believe that we have the power to shape the future, for the better.
            </p>
            </div>
        </div>
    )

}

export default Motto
