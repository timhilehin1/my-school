import React, { useState, useEffect } from "react";
import logo from '../assets/small logo.png'
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";

function Footer() {

    useEffect(() => {
 window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])

    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <div className="mt-12 bg-slate-200 px-8 pt-4"  >
            <section className="leading-loose">
                    <div className="flex items-center gap-4">
                     <img className='h-11' src={logo} />
                    <p className="font-semibold">Victoria's</p>
                    </div>

                <div className="flex items-center gap-4">
                <BsTelephoneForward />
                    <p>08138109620</p>
                </div>

                <div  className="flex items-center gap-4">
                <HiOutlineLocationMarker />
                <p>Ilogbo, Ogun State</p>
                </div>

                   <div  className="flex items-center gap-4">
                   <MdOutlineEmail />
                    <p>timilehinoladapo0@gmail.com</p>
                </div>

                <div  className="flex items-center gap-4">
                    <AiFillFacebook />
                    <BsInstagram/>
                </div>
            </section>

            <section className="mt-8 leading-loose">
                <p className="text-xl font-semibold">Support</p>
                <p>About Us</p>
                <p>Become a Teacher</p>
                <p>Careers</p>
            </section>

            <section className="mt-8 leading-loose">
                <p className="text-xl font-semibold">Events</p>
                <p>Upcoming events</p>
                <p>School calendar</p>
                <p>FAQS</p>
            </section>

            <section className="flex justify-center">
                <IoIosArrowDropup onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }} size={40}/>
            </section>

          <p className="m-auto flex justify-center"> { year } &copy; Oladapo Timilehin Raspadori </p>
        </div>
    )
}

export default Footer
