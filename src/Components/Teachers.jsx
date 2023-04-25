import React from "react";
import teacher from '/teachers.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {TeachersData } from "./TeachersData";
//this section can be dynamic tho, i mean it can also be used for notifications idk

function Teachers() {
    return (
        //mobile devices
        <div className="mt-12 ">
               <h3 className="font-semibold text-xl">Meet our Teachers</h3>
               <p className="text-slate-400">Not all heroes wear capes</p>

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
                className="mySwiper">

                {TeachersData.map(el=>{
                    return (

                        <SwiperSlide className="w-full relative">
                        <div className="relative">
                            <img className="h-72 object-cover" src={el.img} />
                                <p className="px-0.5 py-0.5 flex justify-center bottom-0 absolute bg-[#5AAF4B]">{el.title}</p>
                        </div>
                    </SwiperSlide>

                    )
                })

                }

       </Swiper>


            <div>
            </div>

        </div>
    )
}

export default Teachers
