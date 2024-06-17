import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const images = [
    "../imgs/info1.jpg",
    "../imgs/info2.jpg",
    "../imgs/info3.jpg"
    
  ];

export default function SwiperFile() {
  return (
    <div>
        <article className="flex justify-center mt-2">
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[0]} alt="no image" /></SwiperSlide>
            <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[1]} alt="no image" /></SwiperSlide>
            <SwiperSlide><img className="rounded-lg w-full h-[364px]" src={images[2]} alt="no image" /></SwiperSlide>
        
          </Swiper>
        </article>
      
    </div>
  )
}
