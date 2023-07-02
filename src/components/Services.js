import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import expressJs from "../assets/expressjs.png";
import nextJs from "../assets/nextjs.png";
import firebase from "../assets/firebase.png";
// import typescript from "../assets/typescript.png";
// import redux from "../assets/redux.png";
// import mysql from "../assets/mysql.png";

const Services = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nextJs,
      title: "Next.js",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: expressJs,
      title: "ExpressJS",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 13,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    // {
    //   id: 12,
    //   src: mysql,
    //   title: "MySQL",
    //   style: "shadow-blue-500",
    // },
    // {
    //   id: 14,
    //   src: typescript,
    //   title: "TypeScript",
    //   style: "shadow-blue-500",
    // },
    // {
    //   id: 15,
    //   src: redux,
    //   title: "Redux",
    //   style: "shadow-purple-500",
    // },
  ];

  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-10 lg:bg-services lg:bg-bottom bg-no-repeat bg-cover mix-blend-lighten  lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">My Skills</h2>
            <h3 className="text-justify max-w-[500px]">
              I specialize in MongoDB, Express.js, Node.js, HTML, CSS, and
              JavaScript, creating dynamic web applications for a seamless user
              experience. I provide innovative solutions tailored to client
              needs, staying updated with the latest technologies.{" "}
            </h3>
          </motion.div>

          {/* Service */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            {/* service list */}
            <div className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
