import {React, useState} from 'react'
import logo from '../assets/small logo.png'
import { NavItems } from './NavItems';
import Dropdown from './Dropdown';
import { AiOutlineMenu} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {
    const [showDropdown, setDropdown] = useState(false)
    return (
        <>
        <section className="flex md:hidden px-2 py-3 header justify-between  items-center container mx-auto">
            <div className='flex  gap-1.5 items-center'>
                <img className='h-11' src={logo} alt="School's logo" />
                <p>Victoria</p>
            </div>
         <p><AiOutlineMenu size="24"/></p>
        </section>

        <section className=' hidden lg:flex  py-3 header justify-around items-center container mx-auto'>
        <div className='flex  gap-1.5 items-center'>
                <img className='h-11' src={logo} alt="School's logo" />
                <p>Victoria</p>
        </div>

        <ul className="flex gap-6 nav-content items-center">
            {NavItems.map(el=>{
                if (el.title === 'Academics') {
                    return (
                        <>
                        <li key={el.id} onMouseEnter={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}} className='flex items-center admissions'>{el.title}<IoIosArrowDown style={{ fontSize: "1.3em" }} />
                                {showDropdown && <Dropdown />}
                        </li>

                            </>
                       )
                }
                 return (
                            <li key={el.id} className='flex items-center ind-Item'>{el.title}<IoIosArrowDown style={{ fontSize: "1.3em" }} />
                            </li>

                       )
            })}

            </ul>

        <div>
        Search
        </div>

            </section>
        </>
    )
}

export default Navbar
