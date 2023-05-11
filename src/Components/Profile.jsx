import React from "react";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
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
                    <p className="text-xl font-bold">Notice Board</p>
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

            <section className="grid grid-cols-1 md:grid-cols-3 ">
                <p>Test 1</p>
                <p>Test 2</p>
                <p>Test 3</p>

            </section>

        </div>
    )
}

export default Profile
