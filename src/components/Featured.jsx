"use client";
import Image from "next/image";
import Title from "./Title";

import { AiOutlineCheck } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { products } from "@/constants";

const Featured = () => {
  return (
    <div>
      <div className="container-banner">
        <Title
          mainTitle={"Рекомендованные товары"}
          subtitle={"Recommendation"}
        />
        <div className="my-20">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
          >
              {products.map((product) => (
                <SwiperSlide>
                  <div  className="products_block w-full">
                      <div className="text-center m-auto">
                        <Image
                          src={product.productsImag}
                          alt="products"
                          className="text-center"
                          objectFit="cover"
                        />
                      </div>
                      <p className=" text-btnColor">{product.productsName}</p>
                      <div>
                        <p className=" text-textColor">{product.productsBrand}</p>
                        <p className=" text-textColor">{product.productsCity}</p>
                      </div>
                      <div className="flex items-center text-btnColor gap-2">
                        <p className=" text-btnColor">
                          {product.productsPriceText}
                        </p>
                        <button>
                          <AiOutlineCheck size={15} />
                        </button>
                      </div>
                      <p className="text-xl font-bold text-titleColor">
                        {product.productsPrice}
                      </p>

                      <div className="flex justify-between items-center">
                        <button className="btn">{product.productsBtn}</button>
                        <div className="flex text-btnColor items-center gap-2">
                          <button>
                            <FaRegHeart size={25} />
                          </button>
                          <button>
                            <BiBarChartAlt2 size={30} />
                          </button>
                        </div>
                      </div>
                    </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Featured;
