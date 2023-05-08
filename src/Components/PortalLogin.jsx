import { React, useState } from "react";
import logo from '../assets/small logo.png'
import { Link } from "react-router-dom";

function PortalLogin() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    function handleChange(e) {
         const {name, value} = e.target
        setFormData((prevdata) => {
            return {
                ...prevdata,
                 [name] : value
            }
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
          console.log(formData)
    }


    return (
        <div className='portal h-screen brightness-75 flex justify-center py-8'>
            <section className="bg-gray-400 portal-signup flex flex-col  w-96 px-8 py-4">
            <p className="text-center mx-auto"><img className='h-11' src={logo}/></p>
            <p className="text-center text-2xl font-semibold">LOG IN</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >

            <section className="flex flex-col gap-2">
             <label htmlFor="email">Email</label>
             <input
              className='p-0.5 rounded'
             type="email"
             name="email"
             onChange={handleChange}
             required

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

                    <p className="text-center">Don't have an account? <span className="underline underline-offset-1"><Link to="/portalsignup">Sign up</Link></span> </p>
              <button className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Log in</button>

            </form>

        </section>
        </div>
    )
}

export default PortalLogin
