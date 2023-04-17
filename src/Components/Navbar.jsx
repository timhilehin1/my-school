import React from 'react'
import logo from '../assets/small logo.png'
import { AiOutlineMenu} from "react-icons/ai";



function Navbar(){

    return (
        <section className="flex px-2 py-3 header justify-between  items-center container mx-auto">
            <div className='flex gap-1.5 items-center'>
                <img className='h-11' src={logo} alt="School's logo" />
                <p>Victoria</p>
            </div>
         <p><AiOutlineMenu size="24"/></p>
        </section>
    )
}

export default Navbar
