
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Work = () => {
  return (
    <div>
      <section className="section " id="work">
        <div className="container mx-auto my-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-11  lg:mb-0"
            >
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My Latest <br /> Projects.
                </h2>
                <p className="text-justify">
                  Check out my latest projects that showcase my skills and
                  expertise in React, Tailwind CSS, Firebase, MongoDB,
                  Express.js, and Node.js. Each project demonstrates my ability
                  to create dynamic and responsive web applications with
                  seamless integration of frontend and backend technologies.
                  Explore the projects below to see how I leverage these
                  technologies to build innovative solutions.
                </p>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 mt-3  border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src="https://i.ibb.co/MP35G2k/Screenshot-8.jpg"
                  alt=""
                />
                {/* preTitle */}
                <div className="absolute  -bottom-full left-10 group-hover:bottom-24 transition-all duration-500 z-40">
                  <span className=" text-accent font-semibold">
                    MERN Stack single page application
                  </span>
                </div>
                {/* title */}
                <div className="absolute  -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-40">
                  <div className="flex items-center justify-center gap-5">
                    <span className=" text-gradient">Arts Adventure</span>
                    <button
                      className="btn btn-circle"
                      onClick={() => window.my_modal_1.showModal()}
                    >
                      {" "}
                      <FaArrowRight></FaArrowRight>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-10 my-10"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src="https://i.ibb.co/XWSmBLk/Screenshot-8.png"
                  alt=""
                />
                {/* preTitle */}
                <div className="absolute -bottom-full left-10 group-hover:bottom-24 transition-all duration-500 z-40">
                  <span className="text-accent font-semibold">
                    MERN Stack single page application
                  </span>
                </div>
                {/* title */}
                <div className="absolute  -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-40">
                  <div className="flex items-center justify-center gap-5">
                    <span className=" text-gradient">Play Go</span>
                    <button
                      className="btn btn-circle"
                      onClick={() => window.my_modal_2.showModal()}
                    >
                      {" "}
                      <FaArrowRight></FaArrowRight>
                    </button>
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src="https://i.ibb.co/q0d9Mmk/Screenshot-14.png"
                  alt=""
                />
                {/* preTitle */}
                <div className="absolute -bottom-full left-10 group-hover:bottom-24 transition-all duration-500 z-40">
                  <span className=" text-accent font-semibold">
                    MERN Stack single page application
                  </span>
                </div>
                {/* title */}
                <div className="absolute  -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-40">
                  <div className="flex items-center justify-center gap-5">
                    <span className=" text-gradient">Spice Station</span>
                    <button
                      className="btn btn-circle"
                      onClick={() => window.my_modal_3.showModal()}
                    >
                      {" "}
                      <FaArrowRight></FaArrowRight>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-black bg-opacity-70 rounded-lg shadow-lg"
        >
          <div className="lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 ">
            <div className="lg:w-[50%]">
              <Carousel className=" text-white" showArrows={true}>
                <div>
                  <img src="https://i.ibb.co/3WN6v6T/Screenshot-6.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/fvTBFWh/Screenshot-4.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/vBfBrpZ/Screenshot-4-1.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/k68JX3P/Screenshot-4-2.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/4FdKk92/Screenshot-4-3.png" />
                </div>
              </Carousel>

              <div className="flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col">
                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://arts-adventure.web.app"
                  >
                    Live link
                  </a>
                </button>

                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/Art-Adventure-client-side"
                  >
                    Client side code
                  </a>
                </button>

                <button>
                  <a
                    className=" btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/Art-Adventure-Server-Side"
                  >
                    Server Code{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="border"></div>

            <div className="text-white lg:w-[50%] space-y-5 ">
              <h1 className="h2 text-xl text-accent font-bold">Technologies</h1>
              <p>
                React js, React router, React query, axios, Tailwind CSS,
                DaisyUI, MongoDb, Express js, Firebase, Stripe and JWT
              </p>

              <h1 className="h2 text-xl text-accent font-bold">Details</h1>

              <p>
                I have completed a website called Art Adventure for summer
                school camps. <br /> The website offers various features to
                enhance the experience for students, instructors, and admins.{" "}
                <br /> Students can easily enroll in summer school camps by
                logging in and making payments through Stripe integration.{" "}
                <br />
                They can also track their payment history and view their
                enrolled classes. <br /> Instructors have their own dashboard
                where they can add classes, monitor class status, and receive
                feedback from the admin. Admins have full control over user and
                class management, including approving or denying class requests,
                assigning roles, and providing feedback. <br /> The website
                boasts a user-friendly interface and provides the option to
                choose between dark and light themes for a personalized
                experience. It showcases a seamless and efficient system for
                managing summer school camps, making it a valuable addition to
                my portfolio.
              </p>

              <h1 className="text-xl h2 text-accent font-bold">Key Features</h1>
              <ul className="list-disc p-2 space-y-5">
                <li>
                  Student Enrollment: Students can log in and enroll in summer
                  school camps using Stripe payment integration, ensuring a
                  seamless enrollment process.
                </li>
                <li>
                  Payment History Tracking: Students can view their payment
                  history, providing transparency and easy access to past
                  transactions.
                </li>
                <li>
                  Instructor Dashboard: Instructors have access to a dedicated
                  dashboard where they can add classes, track class status, and
                  receive valuable feedback from the admin.
                </li>
                <li>
                  Admin Management: Admins can manage users and classes,
                  including approving or denying class requests, assigning roles
                  (student/instructor/admin), and providing feedback.
                </li>
                <li>
                  User-Friendly Interface: The website offers a user-friendly
                  interface that ensures a smooth and intuitive experience for
                  all users.
                </li>
                <li>
                  Dark/Light Theme Options: Users have the ability to switch
                  between dark and light themes, enhancing personalization and
                  visual preferences.
                </li>
              </ul>
            </div>
          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className=" btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 top-2">
              ✕
            </button>
          </div>
        </form>
      </dialog>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-black bg-opacity-70 rounded-lg shadow-lg"
        >
          <div className="lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 ">
            <div className="lg:w-[50%]">
              <Carousel className=" text-white" showArrows={true}>
                <div>
                  <img src="https://i.ibb.co/XyKxxg0/Screenshot-9.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/vZJcSZ4/Screenshot-10.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/khHMXRZ/Screenshot-11.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/LNPc2CY/Screenshot-12.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/C9rw7tN/Screenshot-13.png" />
                </div>
              </Carousel>

              <div className="flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col">
                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://play-go-toys.web.app"
                  >
                    Live link
                  </a>
                </button>

                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/toys-market-place-client-side"
                  >
                    Client side code
                  </a>
                </button>

                <button>
                  <a
                    className=" btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/toys-market-place-server"
                  >
                    Server Code{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="border "></div>

            <div className="text-white lg:w-[50%] space-y-5 ">
              <h1 className="h2 text-xl text-accent font-bold">Technologies</h1>
              <p>
                React js, axios, Tailwind CSS, DaisyUI, MongoDb, Express js,
                Firebase. React Router,
              </p>

              <h1 className="h2 text-xl text-accent font-bold">Details</h1>

              <p>
                I have developed a Toy website where users can explore a diverse
                collection of educational toys. <br /> The website allows users
                to register and log in to access advanced features such as
                adding, removing, and updating their toy collection using the
                CRUD operations. <br /> <br /> Users can easily search for
                specific toys and sort them by price to find the best options.{" "}
                <br /> <br /> The website provides detailed information about
                each toy, including descriptions and images, to help users make
                informed decisions. <br /> <br /> It offers a seamless and
                interactive experience for users to discover and manage their
                educational toys efficiently.
              </p>

              <h1 className="text-xl h2 text-accent font-bold">Key Features</h1>
              <ul className="list-disc p-2 space-y-5">
                <li>
                  Extensive Educational Toy Collection: Users can browse and
                  explore a wide range of educational toys.
                </li>
                <li>
                  User Authentication: Users can register and log in to access
                  additional features.
                </li>
                <li>
                  CRUD Operations: After logging in, users can add, remove, and
                  update their toys using the Create, Read, Update, and Delete
                  (CRUD) operations.
                </li>
                <li>
                  Toy Details: Users can view detailed information about each
                  toy, including descriptions, images, and specifications.
                </li>
                <li>
                  Search Functionality: Users can search for specific toys based
                  on keywords or categories.
                </li>
                <li>
                  Price Sorting: Users can sort the toys by price to find the
                  ones that fit their budget.
                </li>
              </ul>
            </div>
          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className=" btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 top-2">
              ✕
            </button>
          </div>
        </form>
      </dialog>
      {/* You can open the modal using ID.showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl bg-black bg-opacity-70 rounded-lg shadow-lg"
        >
          <div className="lg:flex justify-between space-y-5 lg:space-y-0 lg:space-x-5 ">
            <div className="lg:w-[50%]">
              <Carousel className=" text-white" showArrows={true}>
                <div>
                  <img src="https://i.ibb.co/8zYs5M0/Screenshot-15.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/BZwW0X2/Screenshot-16.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/MVxjYYV/Screenshot-17.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/59xdScT/Screenshot-18.png" />
                </div>
                <div>
                  <img src="https://i.ibb.co/Vq4jNMP/Screenshot-19.png" />
                </div>
              </Carousel>

              <div className="flex space-y-5  lg:space-y-0 lg:space-x-5 lg:flex-row flex-col">
                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://spice-station-client-side.web.app"
                  >
                    Live link
                  </a>
                </button>

                <button>
                  <a
                    className="btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/Spice-Station-client-side"
                  >
                    Client side code
                  </a>
                </button>

                <button>
                  <a
                    className=" btn btn-sm flex items-center whitespace-nowrap"
                    href="https://github.com/tuhin4ever/Spice-Station-server"
                  >
                    Server Code{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="border "></div>

            <div className="text-white lg:w-[50%] space-y-5 ">
              <h1 className="h2 text-xl text-accent font-bold">Technologies</h1>
              <p>
                React js, React router, Tailwind CSS, DaisyUI, MongoDb, Express
                js, Firebase.
              </p>

              <h1 className="h2 text-xl text-accent font-bold">Details</h1>

              <p>
                Spice Station is an online platform where users can explore a
                wide variety of recipes from different cuisines. It provides a
                convenient way to discover new dishes, learn cooking techniques,
                and get inspired in the kitchen. Here are the key features of
                the Spice Station website
              </p>

              <h1 className="text-xl h2 text-accent font-bold">Key Features</h1>
              <ul className="list-disc p-2 space-y-5">
                <li>
                  Spice Station highlights talented chefs who contribute their
                  expertise to the platform. Users can explore chef profiles,
                  which showcase information about each chef, such as their
                  background, specialties, and experience. The chef profiles
                  also display the number of recipes created by each chef,
                  giving users an idea of their culinary repertoire.
                </li>
                <li>
                  Firebase Authentication is implemented to enhance security and
                  provide a seamless user experience. Users are required to log
                  in or register to access the full functionality of the Spice
                  Station website.
                </li>
                <li>
                  The website offers a powerful search feature, allowing users
                  to search for recipes based on keywords, ingredients, or
                  cuisine types. The search functionality is integrated with the
                  MealDB API, which provides a vast database of recipes and
                  culinary information. Users can easily find specific recipes
                  or explore new ideas by filtering their search results.
                </li>
              </ul>
            </div>
          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className=" btn-sm btn-circle btn-ghost text-white text-2xl absolute right-0 top-2">
              ✕
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Work;
