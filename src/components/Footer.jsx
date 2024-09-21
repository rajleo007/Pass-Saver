import React from "react";
import { GiEternalLove } from "react-icons/gi";
const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
         <div className="font-bold text-white text-2xl">
          <span className='text-green-500'> &lt;</span> 
            Pass
            <span className='text-green-500'>Op/&gt;</span>
            </div>
      <div className="flex mt-2">
        Created with <span ><GiEternalLove size={30 } /> </span>by Rajdeep
      </div>
    </div>
  );
};

export default Footer;
