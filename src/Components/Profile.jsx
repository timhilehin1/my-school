import React from "react";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="">
            <nav className="border border-green-400 w-full flex justify-between p-2">
                <p className="font-bold">Qauafina</p>



                <div className="flex gap-4">
                      <IoNotifications size={20} />
                   <RxAvatar size={20} />
                    <p className="flex items-center">Student Name  <IoIosArrowDown className="" size={20} /> </p>
                    </div>
            </nav>

            <section className="advert border border-green-400">
                <p>trueeeeee</p>
                <p>trueeeeee</p>
                <p>trueeeeee</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-2">

                <div className="intro bg-[#ffffff] rounded">
                   <p>Hi love</p>
                </div>

                  <div className="notice-card bg-[#ffffff] rounded p-2">
                    <header className="text-xl font-bold">Notice Board</header>
                    <hr />
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Fees Reminder ( 11/05/2023)</p>
                    </div>
                    <hr />
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Student Health Check-up ( 11/05/2023)</p>
                    </div>
                    <hr />
                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>Summer Vacation Notice!!!!!!!!!!! ( 11/05/2023)</p>
                    </div>
                    <hr />

                    <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p>2022/2023 Valendictory Service ( 11/05/2023)</p>
                    </div>
                    <hr />

                   <Link to=""> <div className="flex gap-2 text-sm p-1">
                        <AiOutlineMail style={{ color: "red" }} size={20} />
                        <p className="flex"> <p>Please try me</p>( <div className="flex items-center"><AiOutlineClockCircle style={{ color: "" }} size={15}/> <p>11/05/2023</p></div>)</p>
                    </div>
                        <hr />
                        </Link>
                 </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">

                <div className="bg-[#ffffff] rounded subject h-64 md:h-72 overflow-auto">
                    <header className="text-xl font-bold">Subject Progress</header>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Subject</p>
                    <p className="text-sm">33%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">English</p>
                    <p className="text-sm">40%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Mathematics</p>
                    <p className="text-sm">40%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Basic Science</p>
                    <p className="text-sm">45%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">Social Studies</p>
                    <p className="text-sm">60%</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between p-2">
                    <p className="text-sm">History</p>
                    <p className="text-sm">34%</p>
                    </div>
                    <hr />

                </div>
                <div className="bg-[#ffffff] rounded subject h-64 md:h-72 overflow-auto">
                       <header className="text-xl font-bold">Upcoming Assessment</header>
                    <hr />
                </div>

                <div className="bg-[#ffffff] rounded assignnment h-64 md:h-72 overflow-auto">
                 <header className="text-xl font-bold">Holiday Assignment</header>
                    <hr />
                    <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>
                    <hr />
                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>
                    <hr />
                    <section className="p-2">

                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>

                    </section>
                    <hr />
                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex gap-4 justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>

                      <section className="p-2">
                        <div className="flex gap-4 justify-between">
                            <p className="text-sm">Basic Science</p>
                              <div className="flex">
                              <p className="text-sm">Download pdf</p>
                               <p> <HiDownload size={20} /></p>
                               </div>
                        </div>
                        <div className="flex  justify-between">
                        <p className="text-sm">Submission Date: 30/05/2023</p>
                        <p className="text-sm">Status : pending?</p>
                        </div>
                    </section>
                     <hr />
                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                <div className="bg-[#ffffff] rounded teachers h-64 md:h-72 relative p-2 overflow-auto">

                   <header className="text-xl  font-bold">Teacher's List</header>
                    <hr />

                    <div className="content">
                    <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-white text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-white text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-white text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr />

                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-white text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr />
{/*
                     <section className="bg-[#f3f3f3] rounded-sm mt-1 p-1 gap-2 flex">
                        <RxAvatar size={25} />
                        <div>
                        <p>Mr Faleke A.0</p>
                        <div className="flex gap-2">
                        <p>(10001)</p>
                        <button className="bg-[#5AAF4B] text-white text-sm rounded p-0.5">Basic Science</button>
                            </div>
                        </div>
                    </section>
                    <hr /> */}
                        </div>

                </div>

                <div  className="bg-[#ffffff] rounded assignnment h-64 md:h-72 overflow-auto">
                    List 2
                </div>

                <div  className="bg-[#ffffff] rounded library h-64 md:h-72 overflow-auto">
                      <header className="text-xl  font-bold">Library Book Issue List</header>
                    <hr />
                </div>

            </section>



        </div>
    )
}

export default Profile
