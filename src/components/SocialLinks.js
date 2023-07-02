import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <React.Fragment>
          <FaLinkedin size={30} /> LinkedIn
        </React.Fragment>
      ),
      href: "https://www.linkedin.com/in/gr-tuhin-07988726b",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <React.Fragment>
          <FaGithub size={30} /> GitHub
        </React.Fragment>
      ),
      href: "https://github.com/tuhin4ever",
    },
    {
      id: 3,
      child: (
        <React.Fragment>
          <HiOutlineMail size={30} /> Mail
        </React.Fragment>
      ),
      href: "mailto:tuhin4ever19@gmail.com",
    },
    {
      id: 4,
      child: (
        <React.Fragment>
          <BsFillPersonLinesFill size={30} /> Resume
        </React.Fragment>
      ),
      style: "rounded-bl-md",
      href: "/Golam_Rasul_Full Stack Developer.pdf",
      download: true,
    },
  ];

  return (
    <div className="hidden flex-col top-[35%] right-0 fixed lg:flex z-50">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-95px] hover:rounded-md duration-300 bg-rose-950 ${link.style}`}
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex text-center gap-5 items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
