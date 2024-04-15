"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../public/assets/img/logo.png'
import Vk from '../../public/assets/img/vk.png'
import Insta from '../../public/assets/img/instagram.png'
import Facebook from '../../public/assets/img/facebook.png'
import Visa from '../../public/assets/img/Visa.png'
import MirCard from '../../public/assets/img/mir.png'
import Mc from '../../public/assets/img/Mc.png'
import { FaArrowUpLong } from "react-icons/fa6";


import FooterLink from './FooterLink'

const Footer = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <div className=' bg-lightGary py-8'>
        <div className='container-banner'>
            <div className='xl:flex  justify-between  gap-12'>
                <div className='flex flex-col grid-3 '>
                    <Link href={'/'} className='mb-10'>
                        <Image src={Logo} alt='logo' width={190} height={51} />
                    </Link>
                    <div className='mb-5'>
                        <p className=' text-textColor'>Мы в социальных сетях</p>
                        <div className='flex items-center gap-2'>
                            <Link href={''}>
                                <Image src={Vk} alt='vk' width={35} objectFit='cover' height={35} />
                            </Link>
                            <Link href={''}>
                                <Image src={Insta} alt='instagram' width={35} objectFit='cover' height={35} />
                            </Link>
                            <Link href={''}>
                                <Image src={Facebook} alt='facebook' width={45} objectFit='cover' height={45} />
                            </Link>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <p className=' text-textColor'>Мы принимаем</p>
                        <div className='flex items-center gap-2'>
                            <Link href={''}>
                                <Image src={Visa} alt='vk' width={50} objectFit='cover' height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={Mc} alt='instagram' width={50} objectFit='cover' height={30} />
                            </Link>
                            <Link href={''}>
                                <Image src={MirCard} alt='facebook' width={50} objectFit='cover' height={30} />
                            </Link>
                        </div>
                    </div>
                </div>

                <FooterLink />
            </div>

            <div className='flex xl:justify-end md:justify-start sm:justify-start xs:justify-start gap-10 items-center'>
                <div className='flex items-center gap-10'>
                   <div className='grid grid-cols-2 gap-10 col-end-10'>
                       <div className='flex gap-10 flex-container'>
                            <div className='flex flex-col gap-2 items-center'>
                                <div className='flex  items-center'>
                                    <input type='email' className='py-3 px-2 outline-none w-[455px]' placeholder='Введите e-mail' />
                                    <button className=' uppercase bg-btnColor py-3 xl:px-8 lgl:px-5 text-[#fff]'>ПОДПИСАТЬСЯ</button>
                                </div>
                                <div className='w-[620px] text-textColor'>
                                    <p className='w-[485px]'>
                                        Станьте нашим подписчиком, чтобы быть в курсе информации о новинках и специальных предложениях.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleClick} className=' bg-[#fff] text-btnColor hover:bg-btnColor hover:text-[#fff] transition-all ease-out flex justify-center items-center w-[40px] h-[40px] rounded'>
                                    <FaArrowUpLong  size={18}/>
                                </button>
                            </div>
                       </div>   
                   </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer