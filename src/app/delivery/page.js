"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { AiOutlineMail } from "react-icons/ai";

import Title from '@/components/Title';
import { deliveryProps } from '@/constants';
import DeliveryPageOne from '@/components/delivery/DeliveryPageOne';
import DeliveryPageTwo from '@/components/delivery/DeliveryPageTwo';
import DeliveryPageThree from '@/components/delivery/DeliveryPageThree';


const DeliveryPage = () => {
    const [activeItemId, setActiveItemId] = useState(555);

    const handleItemClick = (id) => {
        setActiveItemId(id);
    };

    const renderDeliveryPage = () => {
        switch (activeItemId) {
            case 555:
                return <DeliveryPageOne />;
            case 556:
                return <DeliveryPageTwo />;
            case 557:
                return <DeliveryPageThree />;
            default:
                return null;
        }
    };

    return (
        <div className='container-banner'>
            <div className='my-20'>
                <Title mainTitle={'Доставка'} subtitle={'Delivery'} />
            </div>
            <div className='grid xl:grid-cols-3 gap-4 mb-20 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
                {deliveryProps.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`border border-lightGary py-2 px-2 flex items-center gap-2 cursor-pointer rounded hover:bg-[#4798DE0D] hover:text-btnColor transition-all ease-in ${activeItemId === item.id ? 'bg-[#cad4dd] text-[#fff]' : ''}`}>
                        <Image src={item.icon} alt='icon' width={30} height={30} />
                        <button className={`text-textColor text-xl hover:text-btnColor transition-all ease-in ${activeItemId === item.id ? ' text-[#fff]' : ''} `}>
                            {item.btnText}
                        </button>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                {renderDeliveryPage()}
            </motion.div>

            <div className="flex justify-end my-20">
                <button className=' bg-btnColor py-3 px-4 text-[#fff] flex items-center gap-2 rounded'>
                    <AiOutlineMail size={30} />
                    Отправьте нам сообщение
                </button>
            </div>
        </div>
    );
};

export default DeliveryPage;

