import React from 'react'
import Title from './Title'
import { popularCategorys } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import PopularSlider from './PopularSlider'

const PopularCategory = () => {
  return (
    <div className='mb-20'>
        <div className='bg-popularBg bg-no-repeat py-40 bg-cover'>
            <div className='container-banner'>
               <div className=' relative z-10'>
                    <Title 
                        mainTitle={'Популярные категории'}
                        subtitle={'Сategories'}
                    />
               </div>
            </div>
        </div>

        <div className='container-banner'>
            <div className='grid xl:grid-cols-4 md:grid-col-1 lg:grid-cols-3 sm:grid-cols-2 gap-3 mb-20'>
                {popularCategorys.map((item) => (
                    <div className='bg-lightGary hover:shadow-2xl hover:bg-[#f8f8f8] relative transition-all ease-linear px-4 py-4' key={item.id}>
                        <Link href={item.link} className='flex flex-col justify-center items-center gap-4'>
                            <Image src={item.popularImg} alt='popularImg' objectFit='cover' className='mb-5 text-center' />
                            <p className=' absolute bottom-4 z-20 text-center font-bold'>{item.popularText}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <PopularSlider />
        </div>
    </div>
  )
}

export default PopularCategory