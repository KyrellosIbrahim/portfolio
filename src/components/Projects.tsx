// @ts-ignore
import MunchFeedPicture from "../assets/Food.jpg";
import {FaReact, } from "react-icons/fa";
import { SiTypescript, SiXcode} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <div className="flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[20vh] px-8 lg:px-36 mb-[100vh]">
      <span className="text-5xl md:text-6xl justify-center font-medium">
        Here are my <span className="text-[#02D0B3] font-bold">projects</span>
      </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-">
                <motion.div className="bg-gray-100 dark:bg-[#242426] rounded-lg shadow-lg overflow-hidden border
                dark:border-neutral-800 p-4" whileHover={{scale: 1.02}}>
                    <img
                        src={MunchFeedPicture}
                        alt="MunchFeed Main Page"
                        className="w-full h-64 object-cover scale-"
                    />
                    <div className="p-4">
                        <h4 className="text-2xl font-semibold">MunchFeed App</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            An interactive social media app where you can share your favorite foods with your friends.
                        </p>
                        <div className="mt-2 flex flex-row space-x-3">
                            <FaReact size={24}/>
                            <SiTypescript size={24}/>
                            <RiFirebaseFill size={24}/>
                            <SiXcode size={24}/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
