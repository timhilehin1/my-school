import React from "react";
import studentLife1 from '../assets/studentLife1.png';
import studentLife2 from '../assets/studentLife2.png';
import studentLife3 from '../assets/studentLife3.png'

function StudentLife(){

    return (
        <div className="py-2">
            <section className="text-center mt-8">
            <h3 className="text-4xl font-semibold mt-8">School Life</h3>
            <p className="text-slate-400 ">Building a vibrant community of creative and accomplished people</p>
            </section>

            <section className="mt-8 md:flex md:justify-around md:gap-8  items-center">
                <div className="bg-[#ffffff] mt-4">
                <img className="object-cover w-full" src={studentLife1} alt="Boarding"></img>
                <p className="mt-4 text-xl text-center font-semibold">Student Life</p>
                <p className="mt-4 text-center text-slate-400 ">A residential boarding house with exceptional dining, health care and over 600 students</p>
                </div>

                <div className="mt-4 bg-[#ffffff]">
                <img className="object-cover w-full" src={studentLife2} alt="culture"></img>
                <p className="mt-4 text-xl text-center font-semibold">Arts & Culture</p>
                <p className="mt-4 text-center text-slate-400 ">At Victoria, we make sure our students don't forget the culture of the Society</p>
                </div>

                <div className="mt-4 bg-[#ffffff]">
                <img className="object-cover w-full" src={studentLife3} alt="Recreation"></img>
                <p className="mt-4 text-xl text-center font-semibold">Recreation & Wellness</p>
                <p className="mt-4 text-center text-slate-400 ">At Victoria, We ensure every child expresses his / herself in the best possible way</p>
                </div>
            </section>
        </div>
    )
}

export default StudentLife