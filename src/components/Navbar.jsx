"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../public/assets/img/logo.png";
import Catalog from "../../public/assets/icons/catalog.png";

import OpenCatalog from "./OpenCatalog";

const Navbar = () => {
  const [open, useOpen] = useState(false)

  const handleOpenCatalog = () => {
    useOpen(!open)
  }
 
  return (
    <>
      <nav className="flex justify-between py-5 items-center container-banner">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" width={190} height={51} />
          </Link>
          <ul className="xl:flex gap-5 items-center text-textColor lgl:hidden lg:hidden md:hidden sm:hidden sml:hidden xs:hidden">
            <li>
              <Link className="hover:text-btnColor transition-all ease-linear" href={"/about"}>О нас</Link>
            </li>
            <li>
              <Link className="hover:text-btnColor transition-all ease-linear" href={"/"}>Производители</Link>
            </li>
            <SignedIn>
              <li>
                <Link className="hover:text-btnColor transition-all ease-linear" href={"/"}>Гарантии и возврат</Link>
              </li>
              <li>
                <Link className="hover:text-btnColor transition-all ease-linear" href={"/delivery"}>Доставка</Link>
              </li>
              <li>
                <Link className="hover:text-btnColor transition-all ease-linear" href={"/"}>Оплата</Link>
              </li>
            </SignedIn>
            <li>
              <Link className="hover:text-btnColor transition-all ease-linear" href={"/"}>Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-2 text-textColor items-center">
          <button>
            <UserButton afterSignOutUrl="/" />
          </button>
          <SignedOut>
            <Link className="hover:text-btnColor transition-all ease-linear flex gap-2 items-center" href={"/sign-in"}>
                <FaRegUserCircle size={30} />
                Вход
            </Link> /
            <Link className="hover:text-btnColor transition-all ease-linear" href={"/sign-up"}>Регистрация</Link>
          </SignedOut>

          <div>
            <button className=" text-btnColor font-bold xl:hidden sm:inline-block xs:inline-block md:inline-block">
              <RxHamburgerMenu size={35} />
            </button>
          </div>
        </div>
      </nav>
      <hr className="text-textColor mb-5 w-full border-t" />

      <SignedIn>
        <div className="flex justify-between items-center mb-20 container-banner">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-5 text-btnColor" onClick={handleOpenCatalog}>
              <Image src={Catalog} alt="catalog" width={31} height={31} />
              Каталог товаров
            </button>
          </div>

          <form className="flex items-center gap-10">
            <div className="flex">
              <div className="flex items-center xl:w-[460px] lg:w-[139px] border border-textColor xl:py-2 xl:px-2">
                <input
                  type="text"
                  placeholder="Поиск товаров и брендов"
                  className=" w-full py-2 px-2 border-none focus:outline-none text-textColor xl:font-bold xs:font-light md:font-light xs:text-[12px]"
                />
              </div>
              <button className="bg-btnColor py-2 px-6 rounded-e">
                <IoSearch size={40} color="#fff" />
              </button>
            </div>

            <label className=" cursor-pointer xl:flex xl:flex-col lgl:hidden lg:hidden md:hidden sm:hidden sml:hidden xs:hidden items-start">
              <button className="text-textColor" type="tel">
                8-800-000-00-00
              </button>
              <p className=" text-greenPrimry">Вам перезвонить?</p>
            </label>
          </form>

          <div className="xl:flex items-center lgl:hidden lg:hidden md:hidden sm:hidden sml:hidden xs:hidden gap-5">
            <button className=" text-btnColor flex flex-col items-center">
              <FaRegHeart size={25} />
              Избранное
            </button>

            <button className="text-btnColor flex flex-col items-center">
              <BiBarChartAlt2 size={25} />
              Сравнение
            </button>

            <Link href={'/cart'}>
              <button className="text-btnColor flex flex-col items-center">
                <FiShoppingCart size={25} />
                Корзина
              </button>
            </Link>

          </div>
        </div>
      </SignedIn>

      { open && <OpenCatalog /> }
    </>
  );
};

export default Navbar;
