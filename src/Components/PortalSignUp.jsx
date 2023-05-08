import React, { useState } from "react";
import logo from '../assets/small logo.png'
import { Link } from "react-router-dom";
import db from '../firebaseConfig'
import { collection, addDoc, doc, setDoc,  query, where, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { async } from "@firebase/util";



function PortalSignUp() {

    const auth = getAuth();

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        class:'',
        gender:'',
        email:'',
        password:'',
        confirmPassword: '',
        fees:''
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

  async function QueryFeeswithClass() {
       //go through list of of collection, and run the filter query, set the result of the query as student fees.
        const StudentDetailsRef = collection(db, "StudentDetails")
        const q = query(StudentDetailsRef, where('currentClass', '==', formData.class))
        const querySnapshot = await getDocs(q)

        const upDatedFormData = { ...formData, password:'',  confirmPassword: ''}
        querySnapshot.forEach((doc) => {
            upDatedFormData.fees = doc.data().fees;
        }
      )


    //   save the student's details to db(details plus fees)
      await addDoc(collection(db, "studentSignUpDetails"), upDatedFormData).then
          (() => {
            alert('data stored')
          })
          .catch(() => {
              alert('unable to save fltered details occured')
          })
    }

    async function handleFormData(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, formData.email, formData.confirmPassword)
            .then((studentCredential) => {
              
                QueryFeeswithClass();
                alert('user registered')
                      e.target.reset();
               
            })
            .catch((error) => {
                alert('an error occured')
                console.log(error.code)
                console.log(error.message)
            })



       //clear fields when action is successful
    }


    return (
         <div className="portal h-screen brightness-75 flex justify-center items-center pt-8  ">
             {/* <div className="template"> */}
         <section className="bg-gray-400  portal-signup flex h-full  flex-col  md:h-auto  gap-4 py-4 md:p-8  w-96 ">
             <p className="text-center mx-auto"><img className='h-11' src={logo}/></p>
             <p className="text-center text-2xl font-semibold">Sign Up</p>


             <p className='2xl text-center '>Already have an account? <span className="underline underline-offset-1"><Link to="/portalLogin">LOG-IN</Link></span></p>

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
             <label htmlFor="gender">Gender</label>
             <select
             className='p-0.5 rounded'
            name="gender"
            defaultValue=""
            required
            onChange={handleChange}>
             <option  value="" disabled selected>Select Gender</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
            </select>
              </section>

            <section className="flex flex-col gap-2">
            <label htmlFor="class">Current Class</label>
            <select
             className='p-0.5 rounded'
            name="class"
            required
             defaultValue=""
            onChange={handleChange}>
             <option value="" disabled selected>Select your current class</option>
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
