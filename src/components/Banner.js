
// images
import Image from "../assets/profile.jpg";
// icons
import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import CountUp from "react-countup";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import bannerVideo from "../assets/site-bg.mp4";
import Tilt from "react-parallax-tilt";

const Banner = () => {
  return (
    <section
      className="min-h-screen lg:min-h-[78vh] flex items-center justify-center"
      id="home"
    >
      <video
        src={bannerVideo} // Replace with the path to your video file
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-[92vh] z-0 "
      ></video>

      <div className="container mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* text */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-3xl font-bold leading-tight lg:text-6xl"
            >
              GR <span>Tuhin</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-2xl lg:text-4xl font-semibold uppercase leading-tight"
            >
              <div className="whitespace-nowrap overflow-x-auto p-4">
                <TypeAnimation
                  sequence={[
                    "JavaScript Developer(MERN)",
                    2000,
                    "React Frontend Developer",
                    2000,
                    "Full Stack Web Developer",
                    2000,
                  ]}
                  speed={50}
                  className="text-blue-400"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-10 text-justify max-w-lg mx-auto lg:mx-0"
            >
              I am an experienced Web Developer specializing in the MERN stack.
              With expertise in frontend and backend development, I have
              delivered exceptional user experiences and robust functionality.
              As a Web Designer, I create visually appealing and user-friendly
              interfaces. I also work as a Freelancer, helping clients from
              various industries achieve their online goals.
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex max-w-max gap-6 items-center justify-center"
            >
              <Link
                to="work"
                smooth
                duration={500}
                className="group text-sm btn btn-sm -mt-3"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </Link>
              <div className="text-lg -mt-3  gap-6 max-w-max">
                <div className="flex space-x-2 items-center">
                  <button className="flex justify-center items-center btn-circle bg-green-950 border-0 text-white shadow-2xl hover:bg-transparent">
                    <a href="https://www.linkedin.com/in/gr-tuhin-07988726b/">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </button>
                  <button className="flex justify-center items-center btn-circle bg-green-950 border-0 text-white shadow-2xl hover:bg-transparent">
                    <a href="https://github.com/tuhin4ever">
                      <FaGithub className="text-xl" />
                    </a>
                  </button>
                  <button className="flex justify-center items-center btn-circle bg-green-950 border-0 text-white shadow-2xl hover:bg-transparent">
                    <a href="https://www.facebook.com/tuhin4ev3r">
                      <FaFacebook className="text-xl" />
                    </a>
                  </button>
                  <button className="flex justify-center items-center btn-circle bg-green-950 border-0 text-white shadow-2xl hover:bg-transparent">
                    <a href="https://www.instagram.com/tuhin_4ever/">
                      <FaInstagram className="text-xl" />
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="lg:flex flex-1 max-w-[320px] lg:max-[482px] cursor-pointer"
          >
            <Tilt>
              <div className="relative">
                <img src={Image} className="h-96 ml-5 rounded-lg" />

                <div className="bg-green-800 bg-opacity-50 ml-9 text-white p-2  rounded-lg absolute top-72 shadow-2xl">
                  <p className="flex items-center">
                    <FaHeart className="text-red-500 mr-2"></FaHeart> Projects
                  </p>
                  <h3 className="text-2xl font-bold whitespace-nowrap">
                    <CountUp
                      start={0}
                      end={50}
                      duration={5}
                      delay={2}
                    ></CountUp>
                    + projects
                  </h3>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
