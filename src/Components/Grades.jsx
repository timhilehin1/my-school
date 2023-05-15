import React from "react";
import { Avatar } from '@mui/material';


function Grades(){
    return (
        <div className="grid mt-2 grid-cols-1 mt-4  lg:grid-cols-[25%_75%]  gap-3 ">

            <section className="profile flex flex-col p-1 gap-4 rounded-sm bg-[#f7f7f7]">
                <header className="flex gap-4">
                <div>
                 <Avatar
               alt="student image"
               src="/static/images/avatar/1.jpg"
               sx={{ width: 56, height: 56 }}
                    />
                </div>

                  <div>
                   <p className="font-bold text-base">Ogunmepon Timilehin</p>
                    <p>AdmissionNo:  <span className="font-bold">10001</span></p>
                    </div>
                </header>

                <main className="main-details bg-[#ffffff]">

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Current class</p>
                        <p>JSS3(second term)</p>
                    </div>

                    <hr />

                     <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Gender</p>
                        <p>Male</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Admission Date</p>
                        <p>15/05/2023</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Email</p>
                        <p>oladapo@gmail.com</p>
                    </div>

                    <hr />

                    <div className="flex justify-between p-2.5 rounded text-sm">
                        <p className="">Date of Birth</p>
                        <p>24/02/2007</p>
                    </div>

                     <hr />

                </main>
            </section>

            {/* everything displayed here will be based on the student's history with the schoool */}
            <section className="grades">
                <select>
            <option  value="" disabled selected>Select Session</option>
            <option value="m">2017/2018</option>
            <option value="f">2018/2019</option>
            <option value="f">2019/2020</option>
            <option value="f">2020/2021</option>
            <option value="f">2021/2022</option>
            <option value="f">2022/2023</option>
             </select>
            </section>
        </div>

        )
}

export default Grades
