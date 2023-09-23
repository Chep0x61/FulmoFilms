import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blackScreen, setBlackScreen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBlackScreen(!blackScreen);
  };

  return (
    <div className="font-m_poppins flex flex-row text-xl items-center justify-between 2xl:justify-normal">
        <img className="absolute mt-[13%] z-[-1] w-screen" src="animation/wave.svg" alt="wave"></img>
      <div className="ml-4 lg:ml-8">
        <Logo mw={16} mh={16} />
      </div>
      <div className="2xl:hidden flex flex-col items-center justify-center text-white">
        <p className="font-poppins text-sm sm:text-lg md:text-xl lg:text-2xl">Mathis Lunot</p>
        <p className="font-m_poppins text-sm sm:text-base md:text-lg lg:text-xl">Cinematographer</p>
      </div>
      <div className={`hidden 2xl:inline space-x-8 text-xl text-white lg:ml-[14%] ${showMenu ? "hidden" : "block"}`}>
        <Link to="/film" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/film" ? "underline underline-offset-2" : ""}`}>FILM</Link>
        <Link to="/commercial" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/commercial" ? "underline underline-offset-2" : ""}`}>COMMERCIAL</Link>
        <Link to="/project" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/project" ? "underline underline-offset-2" : ""}`}>PROJECT</Link>
        <Link to="/musicvideo" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/musicvideo" ? "underline underline-offset-2" : ""}`}>MUSIC VIDEO</Link>
        <Link to="/photography" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/photography" ? "underline underline-offset-2" : ""}`}>PHOTOGRAPHY</Link>
        <Link to="/cv" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/cv" ? "underline underline-offset-2" : ""}`}>CV</Link>
        <Link to="/contact" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/contact" ? "underline underline-offset-2" : ""}`}>CONTACT</Link>
      </div>
      <div className="2xl:hidden">
        <img onClick={toggleMenu} src="/icons/mingcute/menu.svg" alt="menu" className="w-8 h-8 mr-4 " />
        {blackScreen && (
          <div className="fixed inset-0 bg-black z-50">
            <div className="absolute top-8 right-6">
              <img onClick={toggleMenu} src="/icons/mingcute/cross.svg" alt="close" className="w-10 h-10" />
            </div>
            <div className="flex flex-col p-24 space-y-4 justify-center items-center h-screen">
              <Link onClick={toggleMenu} to="/film" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">FILM</Link>
              <Link onClick={toggleMenu} to="/commercial" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">COMMERCIAL</Link>
              <Link onClick={toggleMenu} to="/project" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">PROJECT</Link>
              <Link onClick={toggleMenu} to="/musicvideo" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">MUSIC VIDEO</Link>
              <Link onClick={toggleMenu} to="/photography" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">PHOTOGRAPHY</Link>
              <Link onClick={toggleMenu} to="/cv" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">CV</Link>
              <Link onClick={toggleMenu} to="/contact" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
