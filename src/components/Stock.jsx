"use client"

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Title from './Title'

import SliderImg1 from '../../public/assets/img/slider-img-1.png'
import SliderImg2 from '../../public/assets/img/slider-img-2.png'
import SliderImg3 from '../../public/assets/img/slider-img-3.png'


const Stock = () => {
  return (
    <div className='mt-20 mb-20'>
        <div className='container-banner'>
            <div className='flex justify-between items-center mb-20'>
                <Title 
                    mainTitle='Акции'
                    subtitle='Stock'
                />
                <button className=' text-btnColor'>
                    Все акции
                </button>
            </div>
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
                <SwiperSlide>
                    <Image src={SliderImg1} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg3} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg2} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg1} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg3} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg2} alt='slider-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SliderImg1} alt='slider-img' />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Stock