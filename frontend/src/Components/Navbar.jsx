import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blackScreen, setBlackScreen] = useState(false);
  const location = useLocation(); // Récupérer l'URL courante

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBlackScreen(!blackScreen);
  };

  return (
    <div className="font-m_poppins flex flex-row text-xl items-center justify-between bg-test">
      <div className="lg:hidden">
        <Logo mw={32} mh={32} />
      </div>
      <div className="hidden lg:block">
        <Logo mw={60} mh={60} />
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center">
        <p className="font-poppins text-base">Mathis Lunot</p>
        <p className="font-m_poppins text-base">Cinematographer</p>
      </div>
      <div className={`hidden lg:inline space-x-8 text-xl ${showMenu ? "hidden" : "block"}`}>
        <Link to="/film" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/film" ? "underline underline-offset-2" : ""}`}>FILM</Link>
        <Link to="/commercial" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/commercial" ? "underline underline-offset-2" : ""}`}>COMMERCIALS</Link>
        <Link to="/project" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/project" ? "underline underline-offset-2" : ""}`}>PROJECTS</Link>
        <Link to="/music" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/music" ? "underline underline-offset-2" : ""}`}>MUSIC VIDEO</Link>
        <Link to="/photo" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/photo" ? "underline underline-offset-2" : ""}`}>PHOTOGRAPHIES</Link>
        <Link to="/cv" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/cv" ? "underline underline-offset-2" : ""}`}>CV</Link>
        <Link to="/contact" className={`hover:underline hover:underline-offset-2 ${location.pathname === "/contact" ? "underline underline-offset-2" : ""}`}>CONTACT</Link>
      </div>
      <div className="lg:hidden">
        <img onClick={toggleMenu} src="/icons/mingcute/menu.svg" alt="menu" className="w-8 h-8" />
        {blackScreen && (
          <div className="fixed inset-0 bg-black z-50">
            <div className="absolute top-8 right-6">
              <img onClick={toggleMenu} src="/icons/mingcute/cross.svg" alt="close" className="w-10 h-10" />
            </div>
            <div className="flex flex-col p-24 space-y-4 justify-center items-center h-screen">
              <Link onClick={toggleMenu} to="/film" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">FILM</Link>
              <Link onClick={toggleMenu} to="/commercial" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">COMMERCIALS</Link>
              <Link onClick={toggleMenu} to="/project" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">PROJECTS</Link>
              <Link onClick={toggleMenu} to="/music" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">MUSIC VIDEO</Link>
              <Link onClick={toggleMenu} to="/photo" className="text-xl text-gray-100 text-2xl hover:underline hover:underline-offset-2">PHOTOGRAPHIES</Link>
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
