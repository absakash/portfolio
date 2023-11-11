import React from "react";
import {
  FaHome,
  FaRegUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBars
} from "react-icons/fa";
import { FaNewspaper, FaMobileRetro, FaNoteSticky } from "react-icons/fa6";
import myphot from "../images/c2d5051c-fe8b-44e4-9fd7-bbdac67ee494.jpeg";
import { Link, Outlet } from "react-router-dom";
const NavbarDrawer = () => {

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
        <label htmlFor="my-drawer" className="lg:hidden flex justify-end absolute top-0 right-0">
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

          <div className="flex justify-center">
            <img className="w-32 h-32 rounded-[50%] ring ring-green-500 p-1" src={myphot} alt="" />
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
              <Link onClick={handleNavLinkClick} htmlFor="my-drawer" to="/home" className=" hover:text-emerald-500 hover:scale-105">
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
              <Link onClick={handleNavLinkClick}  to="/about" className=" hover:text-emerald-500 hover:scale-105">
                <FaRegUser></FaRegUser>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleNavLinkClick} to='/portfolio' className=" hover:text-emerald-500 hover:scale-105 ">
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
              <Link onClick={handleNavLinkClick} to="/contact" className=" hover:text-emerald-500 hover:scale-105">
                <FaMobileRetro></FaMobileRetro>
                Contact me
              </Link>
            </li>

            <li>
              <p className="mt-48 text-red-600">© Copyright iPortfolio Designed by Akash Biswas</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
