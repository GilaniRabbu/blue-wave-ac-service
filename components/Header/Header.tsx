import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 rounded-full bg-white/10 backdrop-blur border border-white/15">
        <a href="" className="nav-item">
          Home
        </a>
        <a href="" className="nav-item">
          Projects
        </a>
        <a href="" className="nav-item">
          About
        </a>
        <a
          href=""
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
