import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaRegUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBars,
} from "react-icons/fa";

import { FaNewspaper, FaMobileRetro, FaNoteSticky } from "react-icons/fa6";
import myphot from "../images/c2d5051c-fe8b-44e4-9fd7-bbdac67ee494.jpeg";
import { Link, Outlet } from "react-router-dom";
const NavbarDrawer = () => {
  const [theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem('theme'): "light")
   useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

const handleToggle=e=>{
  if(e.target.checked){
    setTheme('dark')

  }else{
    setTheme('light')
  }
}

  const handleNavLinkClick = () => {
    const checkbox = document.getElementById("my-drawer");
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer"
          className="lg:hidden flex justify-end absolute top-0 right-0"
        >
          <FaBars></FaBars>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}

          <div className="relative">
            <label className="swap swap-rotate absolute top-0 right-0">
              {/* this hidden checkbox controls the state */}
              <input onChange={handleToggle} type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          <div className="flex justify-center">
            <img
              className="w-32 h-32 rounded-[50%] ring ring-green-500 p-1"
              src={myphot}
              alt=""
            />
          </div>

          <p className="text-2xl font-serif mt-2">Akash Biswas</p>
          <p className="text-sm font-serif">Junior Developer</p>

          <div className="flex gap-6 justify-center mt-3 ">
            <Link target="blank" to="https://www.facebook.com/sskybiswas">
              <FaFacebook className="w-6 h-6 hover:scale-150  hover:text-emerald-500 "></FaFacebook>
            </Link>
            <Link target="blank" to="https://www.instagram.com/akashbiswas305/">
              <FaInstagram className="w-6 h-6 hover:scale-150  hover:text-emerald-500"></FaInstagram>
            </Link>
            <Link>
              <FaTwitter className="w-6 h-6 hover:scale-150  hover:text-emerald-500"></FaTwitter>
            </Link>
            <Link
              target="blank"
              to="https://www.linkedin.com/in/akash-biswas-3529a21a2/"
            >
              <FaLinkedin className="w-6 h-6 hover:scale-150  hover:text-emerald-500"></FaLinkedin>
            </Link>
            <Link target="blank" to="https://github.com/absakash">
              <FaGithub className="w-6 h-6 hover:scale-150  hover:text-emerald-500"></FaGithub>
            </Link>
          </div>
          <div className="mt-7 flex flex-col gap-1">
            <li htmlFor="my-drawer">
              <Link
                onClick={handleNavLinkClick}
                htmlFor="my-drawer"
                to="/home"
                className=" hover:text-emerald-500 hover:scale-105"
              >
                <FaHome></FaHome>
                Home
              </Link>
            </li>

            {/* <li>
            <label htmlFor="my-drawer" className="">

          <FaBars>
            
          </FaBars>
          <Link to='/about'>about</Link>



           </label>
            </li> */}

            <li htmlFor="">
              <Link
                onClick={handleNavLinkClick}
                to="/about"
                className=" hover:text-emerald-500 hover:scale-105"
              >
                <FaRegUser></FaRegUser>
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavLinkClick}
                to="/portfolio"
                className=" hover:text-emerald-500 hover:scale-105 "
              >
                <FaNewspaper></FaNewspaper>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                target="blank"
                to="https://drive.google.com/file/d/1b1JPCQ_axvwbmGxU6DnEYSb7a72vE704/view?usp=sharing"
                className=" hover:text-emerald-500 hover:scale-105"
              >
                <FaNoteSticky></FaNoteSticky>
                Resume
              </Link>
            </li>
            <li>
              <Link
                onClick={handleNavLinkClick}
                to="/contact"
                className=" hover:text-emerald-500 hover:scale-105"
              >
                <FaMobileRetro></FaMobileRetro>
                Contact me
              </Link>
            </li>

            <li>
              <p className="mt-48 text-red-600">
                © Copyright iPortfolio Designed by Akash Biswas
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
