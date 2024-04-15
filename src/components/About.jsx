"use client"
import Image from 'next/image';

import { aboutBlocks } from '@/constants';
import Bg from '../../public/assets/img/about-bg.png';
import AboutSlider from './AboutSlider';


const About = () => {

    const blockAbout = aboutBlocks.map((item) => (
        <div key={item.id} className='flex items-center gap-4'>
            <Image  src={item.aboutIcon} alt='transport' width={70} height={70}/>
            <div className='flex flex-col gap-2'>
                <p className=' text-titleColor font-bold'>{item.aboutTile}</p>
                <p className=' text-textColor'>{item.aboutText}</p>
            </div>
        </div>
    ))

  return (
    <>
        <div className="bg-cover bg-no-repeat w-full mb-20 py-10 bg-aboutBg">
            <div className='container-banner'>
                <div className='xl:flex xl:items-center gap-20'>
                    <div className='flex  xl:flex-col sm:justify-around sm:mt-5 md:flex-row md:justify-around md:mb-10 lg:flex-row lg:justify-around lg:mb-20 gap-5 items-center text-greenPrimry'>
                        <div className='2xl:flex 2xl:flex-col justify-between'>
                            <p className='text-7xl'>2K</p>
                            <p className=' text-textColor font-bold'>наименований <br /> продукции</p>
                        </div>
                        <div className='flex flex-col'>
                            <h4 className=' text-7xl'>30</h4>
                            <p className=' text-textColor font-bold'>брендов<br /> работают с нами</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='text-3xl text-titleColor'>
                                Мы не просто продаем товары для ванной - мы помогаем вам найти лучшее решение.
                            </p>
                        </div>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                        {blockAbout}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-banner mb-10'>
            <AboutSlider />
        </div>
    </>
  );
};

export default About;
