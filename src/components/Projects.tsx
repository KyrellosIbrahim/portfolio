// @ts-ignore
import MunchFeedPicture from "../assets/Food.jpg";
// @ts-ignore
import Maze from "../assets/Black Maze Wall Photo.jpg";
// @ts-ignore
import bookshelf from "../assets/Bookshelf.jpg";
// @ts-ignore
import server from "../assets/Ethernet Cables Server Rack.jpg"
import {FaReact, FaJava, FaPython, FaGithub, FaDocker, FaLinux, FaJenkins } from "react-icons/fa";
import { SiTypescript, SiXcode} from "react-icons/si";
import { RiFirebaseFill, RiCloseLargeFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: "XPerience Server",
            image: server,
            description:"Java server that connects to a MySQL backend on Ubuntu VM.",
            icons: [<FaJava size={24}/>, <FaLinux size={24}/>, <GrMysql size={24}/>, <FaDocker size={24}/>, <FaJenkins size={24}/>],
            detailedDescription: "This is a Java-based server that connects to a MySQL backend on Ubuntu VM. Implemented with" +
                " a CI/CD pipeline using Jenkins, Maven, JUnit, and Docker with security hardening and zero-downtime deployment.",
            link: "https://github.com/KyrellosIbrahim/XPerience"
        },
        {
            id: 2,
            name: "MunchFeed App",
            image: MunchFeedPicture,
            description: "An interactive social media app where you can share your favorite foods with your friends.",
            icons: [<FaReact size={24}/>, <SiTypescript size={24}/>, <RiFirebaseFill size={24}/>, <SiXcode size={24}/>],
            detailedDescription: "This is a social media app where you can upload pictures of your favorite meals" +
                " for the day, share it with your friends, and leave comments on each other's posts and profiles.",
            link: "https://github.com/minash23/MunchFeed"
        },
        {
            id: 3,
            name: "Rat Maze Solver",
            image: Maze,
            description: "A Java program that uses A* to find the shortest possible path in a maze.",
            icons: [<FaJava size={24}/>],
            detailedDescription: "This Java program takes an input txt file and uses the A* algorithm to solve it, if possible. " +
                "The maze is represented as a grid, and the program calculates the optimal path from the start point to the end point.",
            link: "https://github.com/KyrellosIbrahim/mazeGame"
        },
        {
            id: 4,
            name: "File Organization Script",
            image: bookshelf,
            description: "A Python script that parses folders and organizes files based on their type.",
            icons: [<FaPython size={24}/>],
            detailedDescription: "This Python script organizes files in a directory based on their type. The script parses " +
                "the Downloads folder and moves files to their respective folders based on their file extension.",
            link: "https://github.com/KyrellosIbrahim/ImageFileSorter"
        }
    ];

    const renderTechIcons = (projectId) => {
        switch(projectId) {
            case 1:
                return (
                    <>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <FaJava size={36} className="text-[#5382a1]"/>
                            <div className="icon-tooltip">Java</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <FaLinux size={36}/>
                            <div className="icon-tooltip">Linux</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <GrMysql size={36} className="text-[#428db2]"/>
                            <div className="icon-tooltip">MySQL</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <FaDocker size={36} className="text-[#006db8]"/>
                            <div className="icon-tooltip">Docker</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <FaJenkins size={36}/>
                            <div className="icon-tooltip">Jenkins</div>
                        </motion.div>
                    </>
                )
            case 2:
                return (
                    <>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <FaReact size={36} className="text-[#26d9fd]"/>
                            <div className="icon-tooltip">React Native</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <SiTypescript size={36} className="text-[#3178c6]"/>
                            <div className="icon-tooltip">TypeScript</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <RiFirebaseFill size={36} className="text-[#ffcb2d]"/>
                            <div className="icon-tooltip">Firebase</div>
                        </motion.div>
                        <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                            <SiXcode size={36} className="text-[#0f8de8]"/>
                            <div className="icon-tooltip">Xcode</div>
                        </motion.div>
                    </>
                );
            case 3:
                return (
                    <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                        <FaJava size={36} className="text-[#5382a1]"/>
                        <div className="icon-tooltip">Java</div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                        <FaPython size={30} className="text-[#306998]"/>
                        <div className="icon-tooltip">Python</div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[20vh] px-8 lg:px-36 xl:pr-80 mb-[40vh]">
                <span className="text-5xl md:text-6xl justify-center font-medium">
                    Here are my <span className="text-[#01a7ff] font-bold">projects</span>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{once: false, margin: "100px"}}
                            whileHover={{scale: 1.02}}
                            onClick={() => setSelectedProject(project)}
                            className="bg-gray-100 dark:bg-[#242426] rounded-lg shadow-lg overflow-hidden border
                            dark:border-neutral-800 p-4 cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-64 xl:h-96 object-cover"
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
                                onClick={(e) => e.stopPropagation()}
                                initial={{opacity: 0, scale: 0}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0}}
                                transition={{duration: 0.25}}
                                className="relative bg-white dark:bg-[#242426] rounded-lg shadow-lg p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <motion.h2
                                        initial={{x: -20, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{delay: 0.25}}
                                        className="text-2xl font-semibold">{selectedProject.name}</motion.h2>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 font-semibold">
                                        <RiCloseLargeFill/>
                                    </button>
                                </div>

                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-full h-64 object-cover shadow-md shadow-neutral-600 dark:shadow-neutral-950 mb-4"
                                />

                                <motion.p
                                    initial={{x: 20, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    transition={{delay: 0.25}}
                                    className="text-black dark:text-white mb-6">
                                    {selectedProject.detailedDescription}
                                </motion.p>

                                <div className="flex justify-between items-center">
                                    <motion.div
                                        initial={{x: -20, opacity: 0}}
                                        animate={{x: 0, opacity: 1}}
                                        transition={{delay: 0.25}}
                                        className="flex space-x-3.5">
                                        {renderTechIcons(selectedProject.id)}
                                    </motion.div>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                        >
                                            <FaGithub size={36}/>
                                        </motion.button>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
};

export default Projects;