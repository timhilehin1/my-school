import React from 'react'
import logo from '../assets/small logo.png'
import { NavItems } from './NavItems';
import { AiOutlineMenu} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";


function Navbar(){
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
               
                return <li key={el.id} className='flex items-center'>{el.title}<IoIosArrowDown style={{fontSize: "1.3em"}}/></li>
            })}
                {/* <li className='flex items-center'>Home<IoIosArrowDown style={{fontSize: "1.3em"}}/></li>
                <li className='flex items-center'>Academics<IoIosArrowDown style={{fontSize: "1.3em"}}/></li>
                <li className='flex items-center'>Admissions<IoIosArrowDown style={{fontSize: "1.3em"}}/></li>
                <li className='flex items-center'>About<IoIosArrowDown style={{fontSize: "1.3em"}}/></li>
                <li className='flex items-center'>Contact<IoIosArrowDown style={{fontSize: "1.3em"}}/></li> */}
            </ul>
        
        <div>
        Search
        </div>

        </section>
        </>
    )
}

export default Navbar
