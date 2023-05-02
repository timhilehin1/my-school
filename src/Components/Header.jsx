import {  Link } from "react-router-dom";

function Header(){
return (
    <>
    <section className="header container mx-auto">
            <p className="text-center py-2 md:hidden">REGISTER |  LOGIN</p>
            <div className="hidden md:flex justify-between px-8 py-2">
            <ul className="flex gap-6 items-center">Information for:
            <Link to="/portal"><li>Portal</li></Link>
            <li>Teachers</li>
            <li>Research</li>
            <li>Community</li>
            </ul>
            <p>REGISTER |  LOGIN</p>
            </div>
    </section>
     <hr className="bg-[#374151]"/>
     </>
)
}

export default Header
