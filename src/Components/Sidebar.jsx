import React, { useEffect, useState } from "react";
import logo from '../assets/small logo.png'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineWarning} from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { GrAnnounce, GrTransaction } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdArrowDropup,IoIosSwap  } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import Chip from '@mui/material/Chip';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function Sidebar() {



    const [SideMenu, setSidemenu] = useState(false)
    const [display, setDisplay] = useState(false)

  function toggleSidebar(){
      setSidemenu(!SideMenu)
     }
// onClick={()=>{setDisplay(!display)}} 
    return (
        <>

        <div className= {`absolute md:fixed ${SideMenu ? "translate-x-0 md:translate-x-0" : "-translate-x-full md:translate-x-0"} bg-[#86efac] w-60 h-screen px-4 py-2 sidebar transition-transform duration-300 ease-in-out z-30`}>
            <div className="flex gap-4 items-center">
                <img className='h-9' src={logo} />
                <p className="text-xl font-bold">Victoria's</p>
                </div>
                <hr className="bg-[red]"/>

                <section className="mt-10 leading-10 flex flex-col gap-6">

                    <Link to="profile">
                        <div className="flex items-center gap-2">
                      <BiHome size={24}/> <p>Profile</p>
                    </div>
                    </Link>

                    <Link to="grades">
                        <div className="flex items-center gap-2">
                        <HiOutlineClipboardDocumentList size={24} />
                        <p>Grades</p>
                        </div>
                    </Link>

                     
                    <div onClick={()=>{setDisplay(!display)}}  className="flex items-center cursor-pointer gap-2">
                        <MdAccountBalance size={24} />
                        <p>Account</p>
                        <IoMdArrowDropdown size={22} className={display ? 'hidden' : 'block'} />
                        <IoMdArrowDropup size={22}  className={display ? 'block' : 'hidden'}  />
                        
                        </div>
                    
                    
                    <div className={display ? 'flex flex-col gap-6' : 'hidden'}>

                     <Link to="statement">
                    <div className="flex items-center gap-2">
                                <IoBarChartOutline size={ 24}/>
                        <p>Statement of Account</p>
                        </div>
                    </Link>
                    
                      <Link to="payments">
                    <div className="flex items-center gap-2">
                       <IoIosSwap size={24} />
                        <p>Make Payments</p>
                        </div>
                        </Link>

                        </div>

                    <Link to="calendar">
                            <div className="flex items-center gap-2">
                    <AiOutlineCalendar size={24} />
                            <p>Upcoming Events</p>
                            </div>
                    </Link>

                    <Link to="notice">
                            <div className="flex items-center gap-2">
                    <GrAnnounce size={24} />
                            <p>Notice board</p>

                            {/* <div className="self-start bg-[red] rounded-2xl p-2"> 3 </div> */}

                            </div>
                    </Link>

                     <Link to="">
                            <div className="flex items-center gap-2">
                    <AiOutlineWarning size={24} />
                            <p>Disciplinary Issues</p>
                            </div>
                    </Link>
                    
          
                   
                        
                    <Link to="settings">
                        <div className="flex items-center gap-2">
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
