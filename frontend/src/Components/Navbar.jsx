import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blackScreen, setBlackScreen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setBlackScreen(!blackScreen);
  };

  return (
    <div className="flex flex-row text-xl p-4 items-center bg-red-100">
      <div className="justify-self-start">
        <Logo w="32" h="32" />
      </div>
      <div className={`hidden lg:inline ${showMenu ? "hidden" : "block"}`}>
        <Link to="/film">FILM</Link>
        <Link to="/commercial">COMMERCIALS</Link>
        <Link to="/project">PROJECTS</Link>
        <Link to="/music">MUSIC VIDEO</Link>
        <Link to="/photo">PHOTOGRAPHIES</Link>
        <Link to="/service">SERVICES</Link>
        <Link to="/cv">CV</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="lg:hidden">
        <img
          onClick={toggleMenu}
          src="/icons/mingcute/menu.svg"
          alt="menu"
          className="w-8 h-8"
        />
        {blackScreen && (
          <div className="fixed inset-0 bg-black z-50">
            <div className="absolute top-4 right-4">
              <img onClick={toggleMenu} src="/icons/mingcute/cross.svg" alt="close" className="w-6 h-6" />
            </div>
            <div className="flex flex-col p-24 space-y-4 justify-center items-center h-screen">
              <Link onClick={toggleMenu} to="/film" className="text-xl text-gray-100">FILM</Link>
              <Link onClick={toggleMenu} to="/commercial" className="text-xl text-gray-100">COMMERCIALS</Link>
              <Link onClick={toggleMenu} to="/project" className="text-xl text-gray-100">PROJECTS</Link>
              <Link onClick={toggleMenu} to="/music" className="text-xl text-gray-100">MUSIC VIDEO</Link>
              <Link onClick={toggleMenu} to="/photo" className="text-xl text-gray-100">PHOTOGRAPHIES</Link>
              <Link onClick={toggleMenu} to="/service" className="text-xl text-gray-100">SERVICES</Link>
              <Link onClick={toggleMenu} to="/cv" className="text-xl text-gray-100">CV</Link>
              <Link onClick={toggleMenu} to="/contact" className="text-xl text-gray-100">CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
