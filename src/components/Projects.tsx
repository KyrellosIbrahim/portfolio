// @ts-ignore
import MunchFeedPicture from "../assets/Food.jpg";
// @ts-ignore
import Maze from "../assets/Black Maze Wall Photo.jpg";
import {FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiXcode} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import {motion} from "framer-motion";
import {useState} from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
            {
                id: 1,
                name: "MunchFeed App",
                image: MunchFeedPicture,
                description: "An interactive social media app where you can share your favorite foods with your friends.",
                icons: [<FaReact size={24}/>, <SiTypescript size={24}/>, <RiFirebaseFill size={24}/>, <SiXcode size={24}/>],
            },
            {
                id: 2,
                name: "Rat Maze Solver",
                image: Maze,
                description: "A Java program that uses A* to find the shortest path in a maze.",
                icons: [<FaJava size={24}/>],
            },
    ];

    return (
        <div className="flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[20vh] px-8 lg:px-36 mb-[100vh]">
      <span className="text-5xl md:text-6xl justify-center font-medium">
        Here are my <span className="text-[#02D0B3] font-bold">projects</span>
      </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
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
            <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-[#242426] rounded-lg shadow-lg p-8 max-w-lg w-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="text-gray-500 hover:text-gray-700
                            dark:text-gray-300 dark:hover:text-gray-100">
                            x
                        </button>
                    </div>
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-64 object-cover mt-4"
                    />
                </div>
            </div>
            )}
        </div>
    );
};

export default Projects;
