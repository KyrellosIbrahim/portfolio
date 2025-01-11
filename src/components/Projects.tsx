// @ts-ignore
import MunchFeedPicture from "../assets/Food.jpg";
// @ts-ignore
import Maze from "../assets/Black Maze Wall Photo.jpg";
import {FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiXcode} from "react-icons/si";
import { RiFirebaseFill, RiCloseLargeFill } from "react-icons/ri";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    // Project data is added here
    const projects = [
            {
                id: 1,
                name: "MunchFeed App",
                image: MunchFeedPicture,
                description: "An interactive social media app where you can share your favorite foods with your friends.",
                icons: [<FaReact size={24}/>, <SiTypescript size={24}/>, <RiFirebaseFill size={24}/>, <SiXcode size={24}/>],
                detailedDescription: "This is a social media app where you can upload pictures of your favorite meals" +
                    " for the day, share it with your friends, and leave comments on each other's posts and profiles."
            },
            {
                id: 2,
                name: "Rat Maze Solver",
                image: Maze,
                description: "A Java program that uses A* to find the shortest path in a maze.",
                icons: [<FaJava size={24}/>],
                detailedDescription: "This Java program takes an input txt file and uses the A* algorithm to solve it, if possible. " +
                    "The maze is represented as a grid, and the program calculates the optimal path from the start point to the end point."
            },
    ];

    return (
        <div className="flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[20vh] px-8 lg:px-36 mb-[100vh]">
      <span className="text-5xl md:text-6xl justify-center font-medium">
        Here are my <span className="text-[#01a7ff] font-bold">projects</span>
      </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {/* project card*/}
                {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="bg-gray-100 dark:bg-[#242426] rounded-lg shadow-lg overflow-hidden border
                            dark:border-neutral-800 p-4"
                    whileHover={{scale: 1.02}}
                    onClick={() => setSelectedProject(project)}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                        <h4 className="text-2xl font-semibold">{project.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                        <div className="mt-2 flex flex-row space-x-3">{project.icons}</div>
                    </div>
                </motion.div>
                    ))}
            </div>
            {/* modal */}
            {selectedProject && (
                <AnimatePresence>
            <motion.div
                onClick={() => setSelectedProject(null)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.25}}
                className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 modal-section">
                <motion.div
                    onClick={( e ) => e.stopPropagation() } // Prevent click on modal from closing it
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0}}
                    transition={{duration: 0.25}}
                    className="bg-white dark:bg-[#242426] rounded-lg shadow-lg p-8 max-w-lg w-full h-[60vh]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="text-gray-500 hover:text-gray-700
                            dark:text-gray-300 dark:hover:text-gray-100 font-semibold">
                            <RiCloseLargeFill/>
                        </button>
                    </div>
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-64 object-cover mt-4 shadow-md shadow-neutral-600 dark:shadow-neutral-950"
                    />
                    <div className="my-3 flex flex-row space-x-3.5">
                        {selectedProject.id === 1 && (
                            <>
                                <div className="relative group">
                                    <FaReact size={30} className="text-[#26d9fd]"/>
                                    <div className="icon-tooltip">React Native</div>
                                </div>
                                <div className="relative group">
                                    <SiTypescript size={30} className="text-[#3178c6]"/>
                                    <div className="icon-tooltip">TypeScript</div>
                                </div>
                                <div className="relative group">
                                    <RiFirebaseFill size={30} className="text-[#ffcb2d]"/>
                                    <div className="icon-tooltip">Firebase</div>
                                </div>
                                <div className="relative group">
                                    <SiXcode size={30} className="text-[#0f8de8]"/>
                                    <div className="icon-tooltip">Xcode</div>
                                </div>
                            </>
                        )}
                        {selectedProject.id === 2 && (
                            <>
                                <div className="relative group">
                                    <FaJava size={30} className="text-[#5382a1]" />
                                    <div className="icon-tooltip">Java</div>
                                </div>
                            </>
                        )}
                    </div>
                    <p className="text-black dark:text-white">{selectedProject.detailedDescription}</p>
                </motion.div>
            </motion.div>
                </AnimatePresence>
            )}
        </div>

    );
};

export default Projects;
