import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png";

import { House, Star } from "lucide-react";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-[#D9F3F5] px-6 py-3">

      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img
          className="w-20 h-20 lg:w-32 lg:h-32 object-contain"
          src={logo}
          alt="logo"
        />

       <h1 className="text-[#12304A] text-sm sm:text-base font-bold lg:text-2xl">
  Favourite Student List
</h1>
      </div>

      {/* Student List */}
      <NavLink to = "/" className= {({isActive}) => isActive ?
       "hidden lg:flex lg:items-center lg:gap-2 bg-[#07b5e0] lg:px-4 lg:py-2 rounded-lg lg:cursor-pointer"
      :"lg:flex lg:items-center lg:gap-2 lg:px-4 lg:py-2 hover:underline"
  }>
        <House size={24} color="#087E8B" />

       <h3 className="text-[#12304A]  text-xs sm:text-sm font-bold lg:text-base cursor-pointer">
  Student List
</h3>
      </NavLink>

      {/* Favourite Students */}
      <NavLink to = "/favourite" className= {({isActive}) => isActive ? " hidden lg:flex lg:items-center lg:gap-2 lg:px-4 lg:py-2 lg:cursor-pointer bg-[#07b5e0] rounded"
      
      : "lg:flex lg:items-center lg:gap-2 lg:px-4 lg:py-2 hover:underline"
  }>
        <Star size={20} color="#087E8B" />

   <h3 className="text-[#12304A] font-bold text-xs sm:text-sm lg:font-bold lg:text-base cursor-pointer">
  Favourite Students
</h3>
      </NavLink>

    </div>
  );
}

export default Header;
