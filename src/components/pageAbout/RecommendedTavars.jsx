import React from 'react'
import Title from '../Title'
import { recomendedProducts } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const RecommendedTavars = () => {
  return (
    <div>
        <div className='container-banner'>
            <Title mainTitle={'Мы рады вам предложить'} subtitle={'Glad to offer you'} />
            <div className='my-10 grid xl:grid-cols-6 lgl:grid-cols-5 md:grid-cols-4 sml:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3'>
                {recomendedProducts.map((product) => (
                    <Link href={product.url} key={product.id} className=' bg-lightGary hover:shadow-2xl hover:bg-[#f8f8f8] transition-all ease-linear py-4 px-4 flex flex-col items-center justify-center gap-2'>
                        <Image src={product.img} alt='product' objectFit='cover' />
                        <p className='text-center text-sm font-bold text-btnColor'>{product.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RecommendedTavars