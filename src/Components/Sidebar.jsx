import React from "react";
import logo from '../assets/small logo.png'
import { Link, useNavigate  } from "react-router-dom";

function Sidebar({ currentRoute, setCurrentRoute }){
    return (
        <div className="border-solid border-2 border-sky-500 w-60 h-screen">
            <div className="flex gap-4">
                <img className='h-11' src={logo} />
                <p>Victoria's</p>
            </div>
           <Link to="test"> <p onClick={setCurrentRoute('test')}>Test</p> </Link>
            <Link to="test1"> <p onClick={setCurrentRoute('test1')}>Test1</p> </Link>
            <p>Grades</p>
            <p>Upcoming Evenyts</p>
        </div>
    )
}

export default Sidebar
