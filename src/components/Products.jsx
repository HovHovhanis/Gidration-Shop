import Image from 'next/image'
import React, { useState } from 'react'

import { AiOutlineCheck } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FaArrowCircleUp } from "react-icons/fa";

import { products } from '@/constants'

const renderProducts = (product) => (
    <div key={product.id} className='products_block'>
        <div className='text-center m-auto'>
            <Image src={product.productsImag} alt='products' className='text-center' objectFit='cover'  />
        </div>
        <p className=' text-btnColor'>{product.productsName}</p>
        <div>
            <p className=' text-textColor'>{product.productsBrand}</p>
            <p className=' text-textColor'>{product.productsCity}</p>
        </div>
        <div className='flex items-center text-btnColor gap-2'>
            <p className=' text-btnColor'>{product.productsPriceText}</p>
            <button>
                <AiOutlineCheck size={15}/>
            </button>
        </div>
        <p className='text-xl font-bold text-titleColor'>{product.productsPrice}</p>

        <div className='flex justify-between items-center'>
            <button className='btn'>{product.productsBtn}</button>
            <div className='flex text-btnColor items-center gap-2'>
                <button>
                    <FaRegHeart size={25} />
                </button>
                <button>
                    <BiBarChartAlt2  size={30}/>
                </button>
            </div>
        </div>
    </div>
)

const Products = () => {

    const [btnMore, setBtnMore] = useState(true);
    const [displayedProducts, setDisplayedProducts] = useState(4);

    const handleProductsAll = () => {
        const nextDisplayedProducts = displayedProducts + 4;
        setDisplayedProducts(nextDisplayedProducts);
    
        if (nextDisplayedProducts >= products.length) {
          setBtnMore(false);
        }
    };

    const handleProductsTop = () => {
        window.scrollTo({ top: 900, behavior: 'smooth' });
    }

  return (
    <>
        <div className='my-6 grid xl:grid-cols-4 md:grid-col-1 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.slice(0, displayedProducts).map(renderProducts)}
        </div>
        
        <div className='text-center'>
            {btnMore ? (
           <div className='flex justify-center items-center gap-2'>
                <button
                    className='border uppercase py-3 px-6 border-btnColor bg-transparent rounded-md hover:bg-btnColor hover:text-[#ffff] transition-all ease-linear'
                    onClick={handleProductsAll}>
                        ЗАГРУЗИТЬ ЕЩЕ
                </button>
                <button onClick={handleProductsTop}  className='transition-all ease-linear text-titleColor hover:text-btnColor'>
                    <FaArrowCircleUp size={35}/>
                </button>
           </div>
            ) : (
            <div className='flex justify-center items-center gap-2'>
                <p className='uppercase text-titleColor font-bold text-3xl'>Больше нет товаров</p>
                <button onClick={handleProductsTop} className='transition-all ease-linear text-btnColor hover:text-titleColor'>
                    <FaArrowCircleUp size={35} />
                </button>
            </div>
            )}
        </div>
    </>
  )
}

export default Products