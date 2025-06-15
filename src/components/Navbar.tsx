import React from "react";
import { FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col space-y-4 p-2 rounded-xl bg-[#1a1a1a] shadow-lg">
      <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl">
        <FaHome />
      </a>
      <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl">
        <FaUser />
      </a>
      <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl">
        <FaTools />
      </a>
      <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl">
        <FaFolderOpen />
      </a>
      <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-xl">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Navbar;
