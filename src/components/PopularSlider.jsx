"use client"

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Riho from '../../public/assets/img/RIHO.png'


const PopularSlider = () => {
  return (
    <div>
         <Swiper spaceBetween={50}
                slidesPerView={2}
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
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                }}
        >
            <SwiperSlide>
                <div className='bg-popularSliderImg1 bg-cover bg-no-repeat h-[320px]'>
                    <div className='flex flex-col h-full justify-between gap-4 py-10 px-5'>
                        <div>
                            <h4 className='text-[#FF7101] mb-5 font-bold text-3xl'>Arc</h4>
                            <p className='text-xl font-bold text-[#fff]'>3 степени свободы</p>
                            <p className='text-[#fff]'>на кухне и в ванной комнате</p>
                        </div>
                        <p className='text-[#FF7101] font-bold text-2xl'>damixa</p>
                    </div>
                </div>       
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-popularSliderImg2 relative  bg-cover bg-no-repeat h-[320px]'>
                    <div className=' absolute right-10 top-5 flex justify-end'>
                        <Image src={Riho} alt='' width={200} height={96}  />
                    </div>
                    <div className='absolute bottom-2 left-5 bg-[#4798DECC] rounded py-5 px-10 w-[250px]'>
                        <p className=' text-[#fff] text-xs font-bold'>На весь ассортимент </p>
                        <p className='text-3xl text-[#fff] font-bold'>скидка 20%</p>
                    </div>
                </div>       
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-popularSliderImg1 bg-cover bg-no-repeat h-[320px]'>
                    <div className='flex flex-col h-full justify-between gap-4 py-10 px-5'>
                        <div>
                            <h4 className='text-[#FF7101] mb-5 font-bold text-3xl'>Arc</h4>
                            <p className='text-xl font-bold text-[#fff]'>3 степени свободы</p>
                            <p className='text-[#fff]'>на кухне и в ванной комнате</p>
                        </div>
                        <p className='text-[#FF7101] font-bold text-2xl'>damixa</p>
                    </div>
                </div>       
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-popularSliderImg2 relative  bg-cover bg-no-repeat h-[320px]'>
                    <div className=' absolute right-10 top-5 flex justify-end'>
                        <Image src={Riho} alt='' width={200} height={96}  />
                    </div>
                    <div className='absolute bottom-2 left-5 bg-[#4798DECC] rounded py-5 px-10 w-[250px]'>
                        <p className=' text-[#fff] text-xs font-bold'>На весь ассортимент </p>
                        <p className='text-3xl text-[#fff] font-bold'>скидка 20%</p>
                    </div>
                </div>       
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-popularSliderImg1 bg-cover bg-no-repeat h-[320px]'>
                    <div className='flex flex-col h-full justify-between gap-4 py-10 px-5'>
                        <div>
                            <h4 className='text-[#FF7101] mb-5 font-bold text-3xl'>Arc</h4>
                            <p className='text-xl font-bold text-[#fff]'>3 степени свободы</p>
                            <p className='text-[#fff]'>на кухне и в ванной комнате</p>
                        </div>
                        <p className='text-[#FF7101] font-bold text-2xl'>damixa</p>
                    </div>
                </div>       
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-popularSliderImg2 relative  bg-cover bg-no-repeat h-[320px]'>
                    <div className=' absolute right-10 top-5 flex justify-end'>
                        <Image src={Riho} alt='' width={200} height={96}  />
                    </div>
                    <div className='absolute bottom-2 left-5 bg-[#4798DECC] rounded py-5 px-10 w-[250px]'>
                        <p className=' text-[#fff] text-xs font-bold'>На весь ассортимент </p>
                        <p className='text-3xl text-[#fff] font-bold'>скидка 20%</p>
                    </div>
                </div>       
            </SwiperSlide>
        </Swiper>
    </div>
  )
}


export default PopularSlider