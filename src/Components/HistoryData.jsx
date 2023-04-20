import { BsCalendarDate } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";

export const HistoryData = [
    {
        id:1,
        title: 'Year',
        No: '2002',
        text: 'The Year Founded',
        logo: <BsCalendarDate size="3.3rem"/>
    },
    {
          id:2,
         title: 'Students',
        No: '500',
        text: 'Students in 2022',
          logo: <SlGraduation size="3.3rem"/>

    },

    {
         id:3,
         title: 'Staffing',
        No: '100',
        text: 'Staffing',
        logo:<HiOutlineUserGroup size="3.3rem"/>,
    },

    {
        id:4,
        title: 'Alumni',
        No: '1000',
        text: 'Alumni',
        logo:<FaUserGraduate size="3.3rem"/>
    },


    {
        id:5,
        title: 'Partner',
        No: '600',
        text: 'Partners',
          logo: <GiShakingHands size="3.3rem"/>
    },
]
