"use client";
import Link from "next/link";
import Image from "next/image";

import { catalogSlider } from "@/constants";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const Advice = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(catalogSlider.length - 1);
    }
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === catalogSlider.length - 1) {
      setCurrent(0);
    }
    else setCurrent(current + 1)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="bg-[#fff] px-4 py-4 shadow-xl w-[340px]">
          <div className="flex flex-col gap-4 py-2 px-3">
            <h4 className="font-bold text-titleColor">Как подобрать ванну</h4>
            <p className=" text-textColor">Советы и рекомендации экспертов</p>
          </div>
        </div>
        <div className="bg-catalogBg bg-cover bg-no-repeat w-full  h-56 flex flex-col justify-end px-2 py-3">
          <Link href={"/"} className="btn w-52">
            Перейти в раздел
          </Link>
        </div>
      </div>

     <div className="w-[340px]">
        <div className=" overflow-hidden mb-5">
          <div className={`flex transition-all ease-linear`} style={{ transform: `translateX(-${current * 100}%)` }}>
            {catalogSlider.map((item) => (
              <div className="bg-[#fff] px-4 py-4 shadow-xl flex flex-col min-w-full" key={item.id}>
                <div className="text-center m-auto">
                  <Image
                    src={item.productsImag}
                    alt="products"
                    className="text-center"
                    objectFit="cover"
                  />
                </div>
                <p className=" text-btnColor mb-5">{item.productsName}</p>
                <div className="mb-2">
                  <p className=" text-textColor">{item.productsBrand}</p>
                  <p className=" text-textColor">{item.productsCity}</p>
                </div>
                <div className="flex items-center text-btnColor gap-2 mb-4">
                  <p className=" text-btnColor">{item.productsPriceText}</p>
                  <button>
                    <AiOutlineCheck size={15} />
                  </button>
                </div>
                <div className=" flex items-center gap-8">
                  <p className="text-xl font-bold text-titleColor">
                    {item.productsPrice}
                  </p>
                  <button className="border py-2 px-8 rounded">
                    {item.productsBtn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={previousSlide} className="border border-lightGary  bg-lightGary hover:bg-btnColor transition-all ease-linear  px-8 py-1"></button>
          <button onClick={nextSlide} className="border border-lightGary  bg-lightGary hover:bg-btnColor transition-all ease-linear  px-8 py-1"></button>
        </div>      
      </div>
    </div>
  );
};

export default Advice;
