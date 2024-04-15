"use client"

import { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import newIcon from "../../public/assets/icons/new-icons.png";
import Image from 'next/image';
import Products from './Products';
import CategoryTheBestDrogboun from './CategoryTheBestDrogboun';

const TheBestCatgory = () => {
    const [menuState, setMenuState] = useState({
        isOpenMenuOne: false,
        isOpenMenuTwo: false,
        isOpenMenuThree: false,
        hover: [false, false, false]
    });

    const handleOpenMenu = (index) => {
        setMenuState({
            isOpenMenuOne: index === 0,
            isOpenMenuTwo: index === 1,
            isOpenMenuThree: index === 2,
            hover: menuState.hover.map((_, i) => i === index)
        });
    };

    return (
        <div className='mb-20'>
            <div className='container-banner'>
                <div className='flex items-center'>
                    {['ХИТЫ ПРОДАЖ', 'НОВИНКИ', '% СКИДКИ'].map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleOpenMenu(index)}
                            className={`border-2 w-[430px] hover:bg-lightGary border-lightGary flex justify-center items-center gap-2 text-center py-3 px-3v
                                ${menuState.hover[index] ? 'bg-lightGary text-btnColor' : 'bg-transparent text-textColor'}`}>
                            {index === 1 ? <Image src={newIcon} alt='new' width={20} height={20} /> : <AiOutlineLike size={20} />}
                            {label}
                        </button>
                    ))}
                </div>
                {[menuState.isOpenMenuOne, menuState.isOpenMenuTwo, menuState.isOpenMenuThree].map((isOpen, index) => (
                    isOpen && (
                        <CategoryTheBestDrogboun
                            key={index}
                            category_1={'Все'}
                            category_2={'Ванны'}
                            category_3={'Душ'}
                            category_4={'Душевые углы и ограждения'}
                            category_5={'Мебель для ванных комнат'}
                            category_6={'Полотенцесушители'}
                            category_7={'Санфаянс'}
                            category_8={'Смесители'}
                            category_9={'Аксессуары'}
                            category_10={'Системы инсталяции'}
                        />
                    )
                ))}
                <Products />
            </div>
        </div>
    );
};

export default TheBestCatgory;
