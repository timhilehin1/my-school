import React, { useEffect, useState } from "react";
import logo from '../assets/small logo.png'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";


function Sidebar() {

const [SideMenu, setSidemenu] = useState(false)

  function toggleSidebar(){
      setSidemenu(!SideMenu)
     }

    return (
        <>

        <div className= {`absolute md:relative ${SideMenu ? "translate-x-0" : "-translate-x-full"} bg-[#86efac] w-60 h-screen px-4 py-4 sidebar transition-transform duration-300 ease-in-out`}>
            <div className="flex gap-4 items-center">
                <img className='h-11' src={logo} />
                <p className="text-xl font-bold">Victoria's</p>
            </div>

                <section className="mt-8 leading-10">

                    <Link to="profile">
                        <div className="flex items-center">
                      <BiHome size={24}/> <p>Profile</p>
                    </div>
                    </Link>

                    <Link to="test1">
                        <div className="flex items-center">
                        <HiOutlineClipboardDocumentList size={24} />
                        <p>Grades</p>
                        </div>
                    </Link>

                     <Link to="account">
                    <div className="flex items-center">
                        <MdAccountBalance size={24} />
                        <p>Account</p>
                        </div>
                        </Link>

                    <Link to="Calendar">
                            <div className="flex items-center">
                    <AiFillCalendar size={24} />
                            <p>Upcoming Events</p>
                            </div>
                        </Link>

                    <Link to="Calendar">
                        <div className="flex items-center">
                      <CiSettings size={24}/>
                            <p>Settings</p>
                            </div>
                        </Link>
            </section>
            </div>

            <div className="flex  md:hidden font-bold justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img className='h-11' src={logo} />
                    <p>Victoria's</p>
                </div>
                <AiOutlineMenu onClick={toggleSidebar} size={30} />

            </div>

   </>
    )
}

export default Sidebar
