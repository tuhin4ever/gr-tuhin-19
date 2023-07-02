import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
// import Link from react-scroll
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20  h-[52px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5  flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer hover:text-white  w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer hover:text-white  w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer hover:text-white  w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            className="cursor-pointer hover:text-white  w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
