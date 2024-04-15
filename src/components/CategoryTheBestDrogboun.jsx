import React from 'react'

const CategoryTheBestDrogboun = (
    { 
        category_1,
        category_2,
        category_3,
        category_4,
        category_5,
        category_6,
        category_7,
        category_8,
        category_9,
        category_10,
    }
) => {
  return (
    <div className='w-full flex gap-5 justify-between items-center py-3 px-3 bg-lightGary'>
        <button className=' text-btnColor underline'>{category_1}</button>
        <button className=' text-textColor '>{category_2}</button>
        <button className=' text-textColor '>{category_3}</button>
        <button className=' text-textColor '>{category_4}</button>
        <button className=' text-textColor '>{category_5}</button>
        <button className=' text-textColor '>{category_6}</button>
        <button className=' text-textColor '>{category_7}</button>
        <button className=' text-textColor '>{category_8}</button>
        <button className=' text-textColor '>{category_9}</button>
        <button className=' text-textColor '>{category_10}</button>
    </div>
  )
}

export default CategoryTheBestDrogboun