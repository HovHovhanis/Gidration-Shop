"use client"

import  Image  from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { aboutSlider } from "@/constants";
import Link from "next/link";


const AboutSlider = () => {
  return (
    <div className="mb-20">
        <Swiper spaceBetween={50}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper"
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  }
                }}
        >
            {aboutSlider.map((item) => (
                <SwiperSlide>
                        <div key={item.id} className="flex justify-center items-center">
                          <Link href={item.link}>
                            <Image src={item.img} alt="slider" objectFit="cover" className=" relative"/>
                            <p className=" absolute bottom-2 left-2 text-center text-[#fff] font-bold z-20">{item.sliderText}</p>
                          </Link>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default AboutSlider