import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const CatalogForm = () => {
    const [showPrice, setShowPrice] = useState(false);
    const [showAvailability, setShowAvailability] = useState(false);
    const [showBrand, setShowBrands] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    
    const togglePrice = (e) => {
        e.preventDefault();
        setShowPrice((prev) => !prev);
    };

    const toggleAvailability = (e) => {
        e.preventDefault();
        setShowAvailability((prev) => !prev);
    };

    const toggleBrands = (e) => {
        e.preventDefault();
        setShowBrands((prev) => !prev)
    }

    const toggleCollection = (e) => {
        e.preventDefault();
        setShowCollection((prev) => !prev)
    }

    const tpggleCountry = (e) => {
        e.preventDefault();
        setShowCountry((prev) => !prev)
    }

    const handleAllResetFilters = (e) => {
        e.preventDefault();
    }


  return (
   <form>
    <div className='bg-[#fff] px-4 py-4 shadow-xl w-[340px] mb-10'>
        <div className='flex items-start flex-col gap-1 mb-5'>
           <label className='flex items-center gap-2'>
                <input type="checkbox" />
                <span className=' text-textColor'>Новинки</span>
           </label>
           <label  className='flex items-center gap-2'>
                <input type="checkbox" />
                <span className=' text-textColor'>Акции</span>
           </label>
           <label className='flex items-center gap-2'>
                <input type="checkbox" />
                <span className=' text-textColor'>Хиты</span>
           </label>
           <label  className='flex items-center gap-2'>
                <input type="checkbox" />
                <span className=' text-textColor'>Уценка</span>
           </label>
        </div>
        <hr className='py-4 text-lightGary'/>
        <label>
            <div className='mb-5'>
                <button className='flex gap-2 items-center text-textColor hover:text-btnColor mb-4' onClick={togglePrice}>
                    <IoMdArrowDropup color='#4798DE'/>
                    Цена
                </button>
                <div className='flex items-center justify-between' style={{display: showPrice ? 'flex' : 'none'}}>
                    <input type="number" placeholder='от' className='w-[130px] py-2 px-2 text-textColor border-textColor border rounded-sm outline-btnColor'/>
                    <p className='text-2xl text-textColor'>-</p>
                    <input type="number" placeholder='до' className=' text-textColor w-[130px] py-2 px-2 border-textColor border rounded-sm outline-btnColor' />
                </div>
            </div>
            <hr className='py-4 text-lightGary'/>
            <div>
                <button className='flex gap-2 items-center text-textColor hover:text-btnColor mb-3' onClick={toggleAvailability}>
                    <IoMdArrowDropup color='#4798DE'/>
                    Наличие
                </button>
                <label className='flex items-center gap-2 text-textColor' style={{display: showAvailability ? 'flex' : 'none'}}>
                    <input type="checkbox" />
                    <span>В наличии</span>
                </label>
            </div>
        </label>
    </div>
    <div className='bg-[#fff] px-4 py-4 shadow-xl w-[340px] mb-10'>
        <div className='mb-5'>
            <button className='flex gap-2 items-center text-textColor hover:text-btnColor mb-3' onClick={toggleBrands}>
                <IoMdArrowDropup color='#4798DE'/>
                Бренды
            </button>
            <label style={{display: showBrand ? 'block' : 'none'}}>
                <div className='mb-4'>
                    <input type="text" placeholder='Поиск ' className='py-1 px-2 w-48 border-textColor border rounded-sm outline-btnColor' />
                </div>
                <div>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Бренд 1</span>
                    </label>
                    <label  className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Бренд 2</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Бренд 3</span>
                    </label>
                </div>
            </label>
        </div>

        <hr className='py-4 text-lightGary'/>

        <div className='mb-5'>
            <button className='flex gap-2 items-center text-textColor hover:text-btnColor mb-3' onClick={toggleCollection}>
                <IoMdArrowDropup color='#4798DE'/>
                Коллекции
            </button>
            <label style={{display: showCollection ? 'block' : 'none'}}>
                <div className='mb-4'>
                    <input type="text" placeholder='Поиск ' className='py-1 px-2 w-48 border-textColor border rounded-sm outline-btnColor' />
                </div>
                <div>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Коллекция 1</span>
                    </label>
                    <label  className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Коллекция 2</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Коллекция 3</span>
                    </label>
                </div>
            </label>
        </div>

        <hr className='py-4 text-lightGary'/>

        <div className='mb-5'>
            <button className='flex gap-2 items-center text-textColor hover:text-btnColor mb-3' onClick={tpggleCountry}>
                <IoMdArrowDropup color='#4798DE'/>
                Страна - производитель
            </button>
            <label style={{display: showCountry ? 'block' : 'none'}}>
                <div className='mb-4'>
                    <input type="text" placeholder='Поиск ' className='py-1 px-2 w-48 border-textColor border rounded-sm outline-btnColor' />
                </div>
                <div>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Страна 1</span>
                    </label>
                    <label  className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Страна 2</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <span className=' text-textColor'>Страна 3</span>
                    </label>
                </div>
            </label>
        </div>

        <hr className='py-1 text-lightGary'/>
    </div>

    <div className='flex flex-col gap-5 items-center'>
        <button className='border border-btnColor py-3 px-8 rounded-md font-bold w-full'>Все фильтры</button>
        <button className='btn w-full'>Применить</button>
        <button className='text-greenPrimry font-bold' onClick={handleAllResetFilters}>Сбросить все фильтры</button>
    </div>
   </form>
  )
}

export default CatalogForm