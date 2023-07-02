// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row mix-blend-lighten lg:items-center lg:gap-x-20 lg:gap-y-0 h-[119vh]">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]  bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am a passionate Web Developer with expertise in the MERN stack.
            </h3>
            <p className="mb-6 text-justify">
              From frontend to backend, I deliver exceptional user experiences
              and robust functionality. As a Web Designer, I create visually
              appealing and user-friendly interfaces. With freelancing
              experience, I help clients achieve their online goals. Let`s build
              something amazing together!
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years Of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            {/* button */}
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-sm btn btn-sm -mt-3"
            >
              Contact me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
