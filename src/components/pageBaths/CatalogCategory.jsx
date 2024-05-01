"use client"
import { IoMdArrowDropup } from "react-icons/io";
import { categoriCatalog, categoryBathsLink } from '@/constants'
import {  useState } from "react";
import CatalogForm from "./CatalogForm";
import Advice from "./Advice";


const CatalogCategory = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(current => !current);
  };


  return (
    <aside className='flex flex-col gap-7 w-[340px]'>
        <div className=' bg-[#fff] px-4 py-4 shadow-xl w-[340px]'>
          {categoryBathsLink.map((item) => (
            <div className='flex flex-col items-start gap-3' key={item.id}>
              <h4 className=' text-titleColor font-bold'>{item.title}</h4>
              {item.bathsLink.map((item) => (
                <button className=' text-textColor hover:text-btnColor' key={item.id}>{item.linkText}</button>
              ))}
            </div>
          ))}
        </div>

        <div className=' bg-[#fff] px-4 py-4 shadow-xl w-[340px]'>
          {categoriCatalog.map((item) => (
              <div key={item.id} className='flex flex-col gap-3'>
                <div className="flex items-center gap-1 cursor-pointer" onClick={toggleMenu}>
                  <IoMdArrowDropup size={22}/>
                  <h4 className=' text-titleColor font-bold'>{item.titleCategory}</h4>
                </div>
                {item.category.map((item) => (
                  <div 
                    key={item.id}  
                    style={{display: show ? 'block' : 'none'}}>
                    <button className=' text-textColor hover:text-btnColor' key={item.id}>
                        {item.categoryLink}
                    </button>
                  </div> 
                ))}     
              </div>
          ))}
        </div>  
        <CatalogForm />  
        <Advice /> 
    </aside>
  )
}

export default CatalogCategory