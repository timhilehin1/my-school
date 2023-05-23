import React, { useEffect, useState } from "react";
import logo from '../assets/small logo.png';
import db from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";
import { doc, setDoc, addDoc, collection  } from "firebase/firestore"; 


// only super-admin should have acccess to you btw




function GenerateTeacher(){

    const [showError, setShowError] = useState(null)
const [formData, setFormData] = useState({
    fullName: '',
    date: '',
    class: '',
    email: '',
    password:'',
    confirmpassword:''
})

useEffect(()=>{

    if(formData.password === formData.confirmpassword){
        setShowError(null)
        
    }
    else{
        setShowError('passwords must match abeg')
        
    }
    

}, [formData])



function handleChange(e){
    const {name, value} = e.target
    setFormData((prevdata)=>{
        return {
            ...prevdata,
            [name] : value
        }
    })

}


async function saveTeachersDetails(){
const TeachersDetails = await addDoc(collection(db, 'TeachersDetails'),  { ...formData, password:'',  confirmpassword: ''});
alert('succesfully registered')
}




function handleFormData(e) {
    e.preventDefault()
    const auth = getAuth();
    console.log(formData)
    createUserWithEmailAndPassword(auth, formData.email, formData.confirmpassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     saveTeachersDetails()
    e.target.reset();
  })
  .catch((error) => {
      alert('unable to register')
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}

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
                        onChange={handleChange}
                        />
                    </section>

                     <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="date ">Date of Employment</label>
                        <input
                        className="p-2 rounded"
                        type="date"
                        name="date"
                        required
                        onChange={handleChange}
                        />
                    </section>


                       <section className="flex flex-col gap-2 ">
             <label htmlFor="class">Class</label>
             <select
             className='p-0.5 rounded'
            name="class"
            defaultValue=""
            required
            onChange={handleChange}
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
                 <label htmlFor="username ">Email</label>
                        <input
                        className="p-2 rounded"
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        />
                    </section>

                    <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="password ">Password</label>
                        <input
                        className="p-2 rounded"
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        />
                    </section>

                    <section className="flex flex-col gap-2 mt-4">
                 <label htmlFor="confirmpassword">Confirm Password</label>
                        <input
                        className="p-2 rounded"
                        type="password"
                        name="confirmpassword"
                        required
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        />
                    </section>
                    {showError && <p style={{color:'red'}}>{showError}</p>}

                     <button  className='bg-[#0d2935] px-2 py-2 rounded text-lg text-white' type="submit">Create User</button>
                </form>






            </div>
        </div>
    )
}

export default GenerateTeacher
