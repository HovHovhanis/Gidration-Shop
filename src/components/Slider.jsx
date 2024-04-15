"use client"

import  Image  from "next/image";

import sliderImg from '../../public/assets/img/banner.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SliderCom = () => {
    
    return (
        <div className='w-full mt-5'>
            <Swiper navigation={true} 
                    modules={[Navigation]} 
                    className="mySwiper"
            >
                <SwiperSlide>
                   <div className=' relative'>
                        <Image src={sliderImg} className=" w-full" alt="bannerimg"/>
                        <div className="flex flex-col justify-center text-3xl text-textColor bg-[#FFFFFFBF] absolute right-0 top-0 w-[420px] h-full z-10">
                            <div className="py-10 px-10">
                                <h1 className="font-bold">
                                    Скидки на мебель для ванной комнаты <br />
                                    <b className="text-5xl text-greenPrimry">до 10%</b>
                                </h1>
                            </div>
                        </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <Image src={sliderImg} alt="bannerimg"/>
                   </div>
                   <div className="flex flex-col justify-center text-3xl text-textColor bg-[#FFFFFFBF] absolute right-0 top-0 w-[420px] h-full z-10">
                        <div className="py-10 px-10">
                            <h1 className="font-bold">
                                Скидки на мебель для ванной комнаты <br />
                                <b className="text-5xl text-greenPrimry">до 10%</b>
                            </h1>
                        </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <Image src={sliderImg} alt="bannerimg"/>
                   </div>
                   <div className="flex flex-col justify-center text-3xl text-textColor bg-[#FFFFFFBF] absolute right-0 top-0 w-[420px] h-full z-10">
                        <div className="py-10 px-10">
                            <h1 className="font-bold">
                                Скидки на мебель для ванной комнаты <br />
                                <b className="text-5xl text-greenPrimry">до 10%</b>
                            </h1>
                        </div>
                   </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SliderCom
