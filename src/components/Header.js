import React from "react";
// import logo from "../assets/logo.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Glitch from "react-glitch-text";
const Header = () => {
  return (
    <header className="py-8" style={{ position: "relative", zIndex: "9999" }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}

          <Glitch color="whitesmoke" fontSize="30px">
            <h2 className="h2 text-green-400">Golam Rasul</h2>
          </Glitch>

          {/* button */}
          <a
            href="/Golam_Rasul_Full Stack Developer.pdf"
            download={true}
            smooth
            duration={500}
            className="group btn btn-sm -mt-5"
          >
            Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-1" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
