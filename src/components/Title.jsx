import React from 'react'

const Title = ({ mainTitle, subtitle }) => {
  return (
    <div>
        <div className='flex items-center'>
            <h1 className='text-darkBlue xl:text-3xl lg:text-2xl sm:text-xl xs:text-[12px] font-bold'>{mainTitle}</h1>
            <p className='xl:text-[110px] lg:text-[70px] md:text-[45px] sm:text-[25px] xs:[18px]   font-bold text-lightGary absolute  left-24 -z-10'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Title