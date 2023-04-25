import {React,useState,useRef} from "react";
import { eventsData } from "./eventsData";
import { BiTime } from "react-icons/bi";
import lab from "../assets/laboratory.png"
import {Quotes} from './ImageQuotes'
import { GoQuote } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Teachers(){
    return (
        <section className="lg:flex gap-16 mt-8 section">
        <div  className="bg-[#5AAF4B] text-white px-4 py-4 mt-8 lg:w-2/4 lg:h-auto leading-9 ">
        <h3 className="text-4xl">Upcoming Events</h3>
       
       
        {
            eventsData.map(ev=>{
                return (
                    <>
                 
                    <div className='events flex gap-8 mt-8  pb-4'>
                    <div className="">
                    <p className="lg:text-xl text-lg font-bold">{ev.date}</p>
                    <p className="text-xl">{ev.month}</p>
                    </div>

                    <div>
                    <p className="lg:text-xl text-lg font-medium">{ev.title}</p>
                    <p className="flex items-center lg:gap-4  gap-2 lg:text-lg text-sm"><BiTime/>{ev.time}</p>
                    <p className="lg:text-lg text-sm">{ev.location}</p>

                    </div>
                    
                  
                    </div>
                    <hr className="bg-[#f1f5f9]"></hr>
                    </>
                   
                )
            })
        }
        
        </div>

      

        <Swiper
       slidesPerView={1}
       spaceBetween={0}
       speed={800}
       autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
       loop={true}
       grabCursor={true}
       navigation={true}
       modules={[Pagination, Autoplay, Navigation]}
       pagination={{
        clickable: true,
      }}
       className="mySwiper"
      >
{
            Quotes.map(item=>{
                return (
                    <>
                    <SwiperSlide className="mt-64"  key={item.id}>
                        <p className="text-black">i'm there</p>
                        <p className="text-black">i'm there</p>
                        <p className="text-black">i'm there</p>
                    <div  className="Buildings mt-8 w-full relative text-white">
                    <img className="object-cover w-full lg:h-full " src={item.img} alt="School buildings"/>
                    <p className="absolute lg:text-3xl text-xl font-semibold ms-4 mt-4">Take a peep at some of our world class facilities</p>
                    <div className="bg-[#fff] py-4 px-4 text-sm lg:text-xl absolute mt-80 lg:absolute lg:mt-0 lg:bottom-4  left-4 text-black flex items-center gap-4"> <GoQuote size="24" color="#5AAF4B"/>{item.quote}</div>
        
                </div>
                </SwiperSlide>
                </>
                )
            })
        }
        </Swiper>
     
        </section>
    )
}
export default Teachers