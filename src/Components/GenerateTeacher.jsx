import React from "react";
import logo from '../assets/small logo.png'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// only sper-admin should have acccess to you btw

function handleFormData() {

}
function GenerateTeacher(){

    return (
        <div className="portal h-screen brightness-75 py-8 px-4">
            <div className=" rounded bg-gray-400 max-w-2xl mx-auto h-full  mt-4 lg:mt-0 pt-8 px-4 overflow-auto">

                <div className="flex  justify-center">
                    <img className='h-16' src={logo} alt="" />
                </div>
                <p className="text-center text-2xl">Register my Teacher</p>

                <form className="flex flex-col gap-4" onSubmit={handleFormData}>
                  <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="fullName ">Full Name</label>
                        <input
                        className="p-2 rounded"
                        type="text"
                        name="fullName"
                        required
                        />
                    </section>

                     <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="date ">Date of Employment</label>
                        <input
                        className="p-2 rounded"
                        type="date"
                        name="date"
                        required
                        />
                    </section>


                       <section className="flex flex-col gap-2 ">
             <label htmlFor="Class">Class</label>
             <select
             className='p-0.5 rounded'
            name="Class"
            defaultValue=""
            required
            >
             <option  value="" disabled selected>Select Class</option>
            <option value="JSS1">JSS1</option>
                <option value="JSS2">JSS2</option>
                            <option value="JSS3">JSS3</option>
                            <option value="SSS1">SSS1</option>
                            <option value="SSS2">SSS2</option>
                            <option value="SSS3">JSS3</option>
            </select>
              </section>


                      <section className="flex flex-col gap-2 mt-4 lg:mt-2">
                 <label htmlFor="username ">Username</label>
                        <input
                        className="p-2 rounded"
                        type="text"
                        name="username"
                        required
                        />
                    </section>

                    <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="password ">Password</label>
                        <input
                        className="p-2 rounded"
                        type="password"
                        name="password"
                        required
                        />
                    </section>

                    <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="confirmpassword">Confirm Password</label>
                        <input
                        className="p-2 rounded"
                        type="password"
                        name="confirmpassword"
                        required
                        />
                    </section>

                     <button className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Create User</button>
                </form>






            </div>
        </div>
    )
}

export default GenerateTeacher
