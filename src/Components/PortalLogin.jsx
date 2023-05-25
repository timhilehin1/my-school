import { React, useState } from "react";
import logo from '../assets/small logo.png'
import { Link, useNavigate  } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import db from '../firebaseConfig'
import { collection, addDoc, doc, setDoc,  query, where, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { async } from "@firebase/util";


function PortalLogin() {

    const auth = getAuth();
    const navigate = useNavigate();

    const [isTeacher, setIsTeacher] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        loginid:'',
        teacherpassword:''
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
        console.log(formData)
        e.preventDefault()
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredentials)=>{
            console.log(userCredentials)
            if (userCredentials.user.email.includes("victoriaschools.com")) {
                alert('welcome admin')
            }
            else {
                      alert('this is a student')
                      navigate("/studentDashboard/profile")
            }

        })
        .catch((error)=>{
            alert('an error occured')
            console.log(error)
        })
    }


    // async function setNewDoc() {
    //     //add document model
    //    console.log("God did")
    //    await setDoc(doc(db, 'StudentDetails', 'JSS3'), {
    //        currentClass: 'JSS3',
    //        fees: 70000,
    //        subjects: {
    //           basicScience : "Basic Science",
    //          creativeArts :  "Creative Arts and Reasoning",
    //          english : "English Language",
    //          healthEdu :  "Health Education",
    //           history: "History and Related Studies",
    //            iT : "Information Technology",
    //           maths: "Mathematics",
    //         socials : "Social Studies"

    //        }
    //      })
    // }








    return (
        <div className='portal h-screen brightness-75 flex justify-center py-8'>
            <section className="bg-gray-400 portal-signup flex flex-col  w-96 px-8 py-4">
            <p className="text-center mx-auto"><img className='h-11' src={logo}/></p>
            <p className="text-center text-2xl font-semibold">LOG IN</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >



         <div>
{ !isTeacher ?

 (
           <>
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
              </>

 )

 :

 (



              <>
              <section className="flex flex-col gap-2">
             <label htmlFor="email">Login ID</label>
             <input
              className='p-0.5 rounded'
             type="text"
             name="loginid"
             onChange={handleChange}
             required

              />
              </section>

              <section className="flex flex-col gap-2">
             <label htmlFor="password">Password</label>
             <input
              className='p-0.5 rounded'
             type="password"
             name="teacherpassword"
             required
             onChange={handleChange}

              />
              </section>
              </>

 )}
              </div>










                    <p className="text-center">Don't have an account? <span className="underline underline-offset-1"><Link to="/portalsignup">Sign up</Link></span> </p>
              <button className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Log in</button>
              <button onClick={()=>setIsTeacher(true)} className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Teacher</button>
              <button onClick={()=>setIsTeacher(false)} className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Student</button>
            </form>

        </section>
        </div>
    )
}

export default PortalLogin
