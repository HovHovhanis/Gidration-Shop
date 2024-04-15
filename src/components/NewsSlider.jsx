"use client"

import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { newsSlider } from '@/constants'

const NewsSlider = () => {
  return (
    <div className='newsSlider'>
         <Swiper 
            spaceBetween={50}
            slidesPerView={3}
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
                560: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {newsSlider.map((item) => (
                <SwiperSlide>
                    <div key={item.id}>
                        <div className=' relative'>
                            <Image src={item.newsImg} alt="slider" objectFit="cover" />
                            <Link 
                                className='absolute left-0 bottom-0 bg-btnColor py-2 px-6 rounded text-[#fff] text-center font-bold' 
                                href={item.newsLink}>
                                    {item.newsLinkText}
                            </Link>
                        </div>
                        <div className='px-5 py-5 flex flex-col gap-4'>
                            <h4 className=' text-titleColor'>{item.newsTilte}</h4>
                            <p className=' text-textColor'>{item.newsText}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default NewsSlider