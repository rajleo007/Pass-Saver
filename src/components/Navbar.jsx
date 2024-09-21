import React from 'react'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="my-container flex flex-col md:flex-row justify-between items-center px-4 h-auto md:h-16 py-5">
        <div className="font-bold text-white text-2xl mb-4 md:mb-0">
          <span className="text-green-500">&lt;</span> 
          Pass
          <span className="text-green-500">Op/&gt;</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          <li>
            <a className="hover:font-bold" href="/">Home</a>
          </li>
          <li>
            <a className="hover:font-bold" href="/">About</a>
          </li>
          <li>
            <a className="hover:font-bold" href="/">Contact</a>
          </li>
        </ul>

        {/* GitHub Button */}
        <button className="mt-4 md:mt-0">
          <FaGithub size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;