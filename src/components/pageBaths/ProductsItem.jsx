"use client"

import Image from 'next/image'
import { products } from '@/constants'
import { AiOutlineCheck } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";

const ProductsItem = ( product ) => {

  return (
    <div key={products.id} className='products_block'>
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
            <button 
                
                className='btn'>
                    {product.productsBtn}
            </button>
            <div className='flex text-btnColor items-center gap-2'>
                <button className='hover:text-btnColor transition-all ease-linear'>
                    <FaRegHeart size={25} />
                </button>
                <button>
                    <BiBarChartAlt2  size={30}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsItem