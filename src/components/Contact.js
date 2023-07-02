import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaArrowAltCircleRight,
  FaLocationArrow,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_2cxs5yy",
        "template_nw7k6js",
        formRef.current,
        "9TtuUgsO_TNSqcFwO"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you. I will get back to you as soon as possible.",
            showConfirmButton: true,
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<p>Please try again later</p>",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });

    e.target.reset();
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] text-rose-900 lg:text-[90px] leading-none mb-12">
                let`s Work <br /> together!
              </h2>
              <div className="ml-2 my-5 border-2 border-double border-green-600 max-w-xs mx-auto text-center bg-white opacity-60 cursor-pointer shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Golam Rasul Tuhin
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    I like to build outstanding web apps with JavaScript and
                    React. I am a self-taught developer and I love to learn new
                    things.
                  </p>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                      <div className="bg-gray-300 rounded-full p-2">
                        <FaEnvelope className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="ml-2 text-gray-800">
                        tuhin4ever19@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-300 rounded-full p-2 flex gap-2 text-gray-600">
                        <FaPhone className="w-4 h-4" />
                        <FaWhatsapp className="w-4 h-4" />
                        <FaTelegram className="w-4 h-4" />
                      </div>
                      <span className="ml-2 text-gray-800">+8801877008217</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-300 rounded-full p-2 flex gap-2 text-gray-600">
                        <FaLocationArrow className="w-4 h-4" />
                      </div>
                      <span className="ml-2 text-gray-800">
                        Bangladeash, khulna{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder-text-white focus:border-accent transition-all"
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder-text-white focus:border-accent transition-all"
                type="email"
                name="email_id"
                required
                placeholder="Your Email"
              />
              <textarea
                name="messag"
                className="bg-transparent border-b py-12 outline-none w-full placeholder-text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your Message"
                required
              ></textarea>

              <button
                className="group text btn-sm btn rounded-full"
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowAltCircleRight className="ml-1" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
