"use client"
import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Title from './Title'
import { brandsSlider } from '@/constants';


const Brands = () => {
  return (
    <div>
        <div className='container-banner'>
            <div className='flex justify-between mb-20 items-center'>
                <Title 
                    mainTitle={'Популярные бренды'}
                    subtitle={'Brands'}
                />
                <Link className='text-btnColor' href={'/'}>Все бренды</Link>
            </div>
            <div>
                <Swiper 
                    spaceBetween={50}
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
                    {brandsSlider.map((item) => (
                        <SwiperSlide>
                                <div key={item.id}>
                                    <Image src={item.brand} alt="slider" objectFit="cover" />
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Brands