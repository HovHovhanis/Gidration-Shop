import { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion'
import Link from 'next/link'


const OpenCatalog = () => {
    const [open, setOpen] = useState(true)
    
  return (
    <>
     {open && (
        <motion.div 
        className=' bg-lightGary shadow-inner no-scrollbar overflow-y-auto mt-5 w-[420px] h-[480px] absolute z-50 flex justify-between rounded-e-2xl'
        initial={{x:-500, opacity: 0}}
        animate={{x:0,opacity:1}} 
        transition={{duration:.5}} >
        <div className='flex flex-col gap-4 py-5 px-5'>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out' href={'/baths'}>-   Ванны (____) </Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Аксессуары (____) </Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Душ (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Душевые углы и ограждения (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Комплектующие для сантехники (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out' href={'/'}>-   Мебель для ванных комнат (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Полотенцесушители (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Санфаянс (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Системы инсталляций (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Смесители (____)</Link>
            <Link className='hover:bg-darkBlue hover:text-[#fff] py-2 px-2 rounded transition-all ease-out'  href={'/'}>-   Сушилки для рук (____)</Link>
        </div>
        <div className='py-5 px-3'>
            <button onClick={() => setOpen(!open)} className='hover:bg-darkBlue hover:text-[#fff] transition-all ease-linear rounded '>
                <IoMdClose size={40} />
            </button>
        </div>
        </motion.div>
    )}
    </>
  )
}

export default OpenCatalog
