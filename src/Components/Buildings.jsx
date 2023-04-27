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

function Buildings(){
    return (
        <section className="lg:flex gap-16 mt-8 section">
        <div  className="bg-[#5AAF4B] text-white px-4 py-4 mt-8 lg:w-2/4 lg:h-auto leading-9 ">
        <h3 className="text-4xl">Upcoming Events</h3>


        {
            eventsData.map(ev=>{
                return (
                    <div key={ev.id}>

                    <div  className='events flex gap-8 mt-8  pb-4'>
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
                    </div>

                )
            })
        }

        </div>



            <Swiper
                  style={{
                      "--swiper-navigation-color": "#5AAF4B",
                    "--swiper-navigation-size": "2rem",
                   "--swiper-pagination-color": "#5AAF4B",
                    }}
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
                    <SwiperSlide className="mt-8 relative w-full  text-white"  key={item.id}>
                    <div  className="Buildings w-full  text-white">
                    <img className="object-cover w-full relative lg:h-full " src={item.img} alt="School buildings"/>
                    <p className="absolute top-0 lg:text-3xl text-xl font-semibold ms-4 mt-4 text-black">Take a look at some of our world class facilities</p>
                    <div className="bg-[#fff] py-4 px-4 text-sm lg:text-xl absolute bottom-0 lg:absolute lg:mt-0 lg:bottom-4  left-4 text-black flex  flex-col gap-4">
                        <div className="flex gap-4">
                        <GoQuote size="24" color="#5AAF4B" />
                        <p> {item.quote}</p>
                        </div>
                    <p className="ms-8 font-semibold">{item.owner}</p>
                </div>


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
export default Buildings
