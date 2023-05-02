import React, { useState } from "react";
import logo from '../assets/small logo.png'
import {  Link } from "react-router-dom";


function PortalSignUp(){

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        class:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    function handleChange(event){
     const  {name, value, type} = event.target

     setFormData((prevData)=>{
         return{
             ...prevData,
             [name] : value
         }
     })

    }

    function handleFormData(e){
        console.log(formData)
       e.preventDefault();

       //clear fields when action is successful
    }


    return (
         <div className="portal h-screen brightness-75 flex justify-center items-center pt-8  lg:16">
             {/* <div className="template"> */}
         <section className="bg-gray-400 px-8 portal-signup flex h-full  flex-col  md:h-auto  gap-4 py-4 md:p-8  w-96 ">
             <p className="text-center mx-auto"><img className='h-11' src={logo}/></p>
             <p className="text-center text-2xl font-semibold">Sign Up</p>
             

             <p className='2xl text-center '>Already have an account? <span className="underline underline-offset-1"><Link to="/loginportal">LOG-IN</Link></span></p>

             <form className='flex flex-col gap-4' onSubmit={handleFormData}>
             <section className="flex flex-col gap-2">
             <label htmlFor="firstName">First Name</label>
             <input
             className='p-0.5 rounded'
             type="text"
             name="firstName"
             required
             onChange={handleChange}
              />
              </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="lastName">Last Name</label>
             <input
              className='p-0.5 rounded'
             type="text"
             required
             name="lastName"
             onChange={handleChange}
              />
              </section>

            <section className="flex flex-col gap-2">
            <label htmlFor="class">Current Class</label>
            <select
             className='p-0.5 rounded'
            name="class"
            required
            defaultValue="Select Class"
            onChange={handleChange}>
             <option  value="default" disabled>Select your current class</option>
            <option value="Jss1">JSS1</option>
            <option value="JSS2">JSS2</option>
            <option value="JSS3">JSS3</option>
            <option value="SSS1">SSS1</option>
            <option value="SSS2">SSS2</option>
            <option value="SSS3">SSS3</option>
            </select>
            </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="email">Email</label>
             <input 
              className='p-0.5 rounded'
             type="email"
             name="email"
             required
             onChange={handleChange}
              />
              </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="password">Password</label>
             <input
              className='p-0.5 rounded'
             type="password"
             name="password"
             required
             onChange={handleChange}
              />
              </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="confirmPassword">Confirm Password</label>
             <input
              className='p-0.5 rounded'
             type="password"
             name="confirmPassword"
             required
             onChange={handleChange}
              />
              </section>

              <button  className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Submit</button>
              </form>







             </section>
             {/* </div> */}
         </div>
    )
}

export default PortalSignUp