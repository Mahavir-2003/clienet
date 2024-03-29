import React, { MouseEvent } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import PageTransition from './PageTransition';

type MenuProps = {
    toggleMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  };
  
  const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
    const router = useRouter();
  
    const handleLinkClick = (event : any) => {
        toggleMenu(event);
      };
      
  
    return (
    <>
        <div className="menu z-30 w-full h-0 bg-light-green overflow-hidden flex justify-center">
          <div className="menu-container mt-10 md:mt-0 xl:justify-around xl:w-9/12 xl:-mt-10 w-9/12 h-full flex justify-center gap-y-14 lg:items-center lg:w-11/12 lg:gap-x-16 lg:mt-5  flex-col lg:flex-row">
            <div className="menu-items select-none">
               
                <span className="font-secondary text-3xl sm:text-5xl md:text-6xl  md:font-medium lg:text-6xl xl:text-6xl 2xl:text-7xl
             tracking-wider font-semibold">
                    <ul className="flex flex-col text-center gap-y-6 sm:gap-y-5 md:gap-y-8 xl:gap-y-8 2xl:gap-y-10">
                        <li><Link className="link after:mt-3" onClick={handleLinkClick} href="/about">Case Studies</Link></li>
                        <li><Link className="link after:mt-3" onClick={handleLinkClick} href="/">Approach</Link></li>
                        <li><Link className="link after:mt-3" onClick={handleLinkClick} href="/">Services</Link></li>
                        <li><Link className="link after:mt-3" onClick={handleLinkClick} href="/">About Us</Link></li>
                    </ul>
                </span>
            </div>
           
          </div>
        </div>
        <PageTransition />
    </>
  )
}

export default Menu


 {/* <span><h1 className=" font-secondary font-light text-lg md:text-2xl md:mb-8 lg:text-xl 2xl:font-normal 2xl:mb-10
               2xl:text-2xl mb-4 select-none sm:mb-6">Menu</h1></span> */}

 {/* <div className="menu-contact">
                <span><h1 className="font-secondary font-light text-lg font mb-4 select-none sm:mb-6 md:text-2xl lg:text-xl 2xl:font-normal 2xl:mb-10
               2xl:text-2xl">Contact</h1></span>
                <div className="grid grid-cols-2 gap-2 select-none gap-x-6 sm:gap-8 sm:gap-x-16 2xl:gap-20">
                    <div>
                        <h1 className="font-primary pb-4 md:text-2xl lg:text-xl text-xl select-none font-semibold 2xl:text-2xl">Email</h1>
                        <ul className="font-secondary font-light md:tracking-wider xl:tracking-wider md:font-normal text-lg flex flex-col gap-y-2 2xl:text-xl 2xl:gap-y-4">
                            <li><Link href="/" className="link after:mt-1">Get in touch with us</Link></li>
                            <li><Link href="/" className="link after:mt-1">Get a free audit</Link></li>
                        </ul>
                    </div>
                    <div className="hidden sm:block">
                    <h1 className="font-primary pb-4 lg:text-xl text-2xl select-none font-semibold 2xl:text-2xl">Headquarter</h1>
                        <ul className="font-secondary xl:tracking-wider font-light md:font-normal tracking-wider text-lg flex flex-col gap-y-2 2xl:text-xl 2xl:gap-y-4">
                            <li><Link href="/">123, Main Street</Link></li>
                            <li><Link href="/">Civil Lines, Delhi</Link></li>
                            <li><Link href="/"> Delhi-110001, India</Link></li>
                        </ul>
                    </div>
                    <div className="hidden sm:block">
                    <h1 className="font-primary lg:text-xl  pb-4 text-2xl select-none font-semibold 2xl:text-2xl">Phone</h1>
                        <ul className="font-secondary  xl:tracking-wider font-light md:font-normal tracking-wider text-lg  flex flex-col gap-y-2 2xl:text-xl 2xl:gap-y-4">
                        <li><Link href="/" className="link after:mt-1">+91 &nbsp; 3487834341</Link></li>
                        </ul>
                    </div>
                    <div>
                    <h1 className="font-primary xl:tracking-wider pb-4 md:text-2xl text-xl select-none font-semibold lg:text-xl 2xl:text-2xl">Legal</h1>
                        <ul className="font-secondary md:tracking-wider md:font-normal font-light text-lg flex flex-col gap-y-2 2xl:text-xl 2xl:gap-y-4">
                            <li><Link href="/">Privacy & Cookies</Link></li>
                        </ul>
                    </div>
                </div>
            </div> */}