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
        <div className="mt-12 lg-mt-24">
               <h3 className="font-semibold text-xl">Meet our Teachers</h3>
               <p className="text-slate-400">Not all heroes wear capes</p>

               <Swiper
                  style={{
                      "--swiper-navigation-color": "#5AAF4B",
                    "--swiper-navigation-size": "2rem",
                    "--swiper-pagination-color": "#5AAF4B",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
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
        className="mySwiper1 md:hidden">
                {TeachersData.map(el=>{
                    return (

                        <SwiperSlide key={el.id} className="w-full relative">
                        <div className="relative">
                            <img className="h-72 object-cover" loading="lazy" src={el.img} />
                                <p className="px-0.5 py-0.5 flex justify-center bottom-0 absolute bg-[#5AAF4B] text-white">{el.title}</p>
                        </div>
                    </SwiperSlide>

                    )
                })

                }

       </Swiper>

            {/* //desktop screens */}
            <Swiper
            style={{
                "--swiper-pagination-color": "#5AAF4B",
                    "--swiper-pagination-bullet-inactive-color": "white",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-transform": "translateY(50px)"

                    }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,

        }}
        modules={[Pagination]}
        className="mySwiper hidden md:block">

 {TeachersData.map(el=>{
     return (
    <SwiperSlide key={el.id} className="w-full relative">
    <div className="relative">
        <img className="h-72 object-cover" loading="lazy" src={el.img} />
        <p className="px-0.5 py-0.5 flex justify-center bottom-0 absolute bg-[#5AAF4B] text-white">{el.title}</p>
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
