"use client"
import { Pagination } from 'antd';
import { useState } from 'react';

import { products } from '@/constants';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [totalProsucts, setTotalProducts] = useState(8)
    let current = 4
   
    const handleClick = () => {
        setTotalProducts(totalProsucts + current)
    }

  return (
    <div>
        <div className='flex items-center gap-10 mb-5'>
            <button className=' text-textColor'>Сортировать:</button>
            <button className=' text-textColor'>По популярности</button>
            <button className=' text-textColor'>Сначала дешевые</button>
            <button className=' text-textColor'>Сначала дорогие </button>
        </div>
        <div className='my-6 grid xl:grid-cols-3  lg:grid-cols-2 sm:grid-cols-1 gap-5'>
            {products.map(ProductsItem).slice(0, totalProsucts)}
        </div>
        <div className="flex flex-col gap-5">
            <div className='w-full bg-[#fff] border border-lightGary text-center py-2 px-2'>
                <button onClick={handleClick} className='text-center py-1 text-btnColor font-bold'>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
            <div className='text-center mb-20'>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    </div>
  )
}

export default Products