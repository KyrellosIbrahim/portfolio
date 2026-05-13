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
import {useEffect, useRef, useState} from "react";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier for smoother motion
            }
        }
    };

    // Set up intersection observer for the section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    // Optional: Reset animation when scrolling away
                    // setInView(false);
                }
            },
            {
                threshold: 0.15 // Trigger when 15% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const projects = [
        {
            id: 1,
            name: "XPerience Server",
            image: server,
            description:"Java server that connects to a MySQL backend on an Ubuntu VM.",
            tech: [
                { name: "Java", Icon: FaJava, color: "#5382a1" },
                { name: "Linux", Icon: FaLinux, color: undefined },
                { name: "MySQL", Icon: GrMysql, color: "#428db2" },
                { name: "Docker", Icon: FaDocker, color: "#006db8" },
                { name: "Jenkins", Icon: FaJenkins, color: undefined },
            ],
            detailedDescription: "This is a Java-based server that connects to a MySQL backend on an Ubuntu VM. Implemented with" +
                " a CI/CD pipeline using Jenkins, Maven, JUnit, and Docker with security hardening and zero-downtime deployment.",
            link: "https://github.com/KyrellosIbrahim/XPerience"
        },
        {
            id: 2,
            name: "MunchFeed App",
            image: MunchFeedPicture,
            description: "An interactive social media app where you can share your favorite foods with your friends.",
            tech: [
                { name: "React Native", Icon: FaReact, color: "#26d9fd" },
                { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
                { name: "Firebase", Icon: RiFirebaseFill, color: "#ffcb2d" },
                { name: "Xcode", Icon: SiXcode, color: "#0f8de8" },
            ],
            detailedDescription: "This is a social media app where you can upload pictures of your favorite meals" +
                " for the day, share it with your friends, and leave comments on each other's posts and profiles.",
            link: "https://github.com/minash23/MunchFeed"
        },
        {
            id: 3,
            name: "Rat Maze Solver",
            image: Maze,
            description: "A Java program that uses A* to find the shortest possible path in a maze.",
            tech: [
                { name: "Java", Icon: FaJava, color: "#5382a1" },
            ],
            detailedDescription: "This Java program takes an input txt file and uses the A* algorithm to solve it, if possible. " +
                "The maze is represented as a grid, and the program calculates the optimal path from the start point to the end point.",
            link: "https://github.com/KyrellosIbrahim/mazeGame"
        },
        {
            id: 4,
            name: "File Organization Script",
            image: bookshelf,
            description: "A Python script that parses folders and organizes files based on their type.",
            tech: [
                { name: "Python", Icon: FaPython, color: "#306998" },
            ],
            detailedDescription: "This Python script organizes files in a directory based on their type. The script parses " +
                "the Downloads folder and moves files to their respective folders based on their file extension.",
            link: "https://github.com/KyrellosIbrahim/ImageFileSorter"
        }
    ];

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        if (selectedProject) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[12vh] px-8 lg:px-36 mb-24">
                <motion.div
                    className="flex flex-col items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <span className="text-5xl md:text-6xl font-medium">
                        Here are my <span className="gradient-text font-bold">projects</span>
                    </span>
                    <div className="accent-bar mt-4 h-[3px] w-20 rounded-full" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            custom={index}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.2 },
                                boxShadow: "0 10px 30px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(1,167,255,0.25)"
                            }}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-gray-100 dark:bg-[#242426] rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-800 p-4 cursor-pointer transform-gpu"
                        >
                            <motion.div
                                className="relative overflow-hidden rounded-md"
                                initial={{ scale: 0.95, opacity: 0.9 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    loading="lazy"
                                    className="w-full h-64 xl:h-80 object-cover rounded-md transform transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Shimmer sweep */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-md">
                                    <span className="text-white font-semibold text-lg tracking-wide">View Details →</span>
                                </div>
                            </motion.div>

                            <div className="p-4">
                                <motion.h4
                                    className="text-2xl font-semibold"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    {project.name}
                                </motion.h4>

                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 mt-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                >
                                    {project.description}
                                </motion.p>

                                <motion.div
                                    className="mt-2 flex flex-row space-x-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                >
                                    {project.tech.map((t) => (
                                        <t.Icon key={t.name} size={24} style={t.color ? { color: t.color } : undefined} />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal with improved animations */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            onClick={() => setSelectedProject(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 modal-section"
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                                className="relative bg-white dark:bg-[#242426] rounded-lg shadow-lg p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <motion.h2
                                        initial={{ x: -15, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                        className="text-2xl font-semibold"
                                    >
                                        {selectedProject.name}
                                    </motion.h2>
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        onClick={() => setSelectedProject(null)}
                                        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 font-semibold"
                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <RiCloseLargeFill size={24} />
                                    </motion.button>
                                </div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.4 }}
                                >
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.name}
                                        className="w-full h-64 object-cover shadow-md shadow-neutral-600 dark:shadow-neutral-950 mb-4 rounded-md"
                                    />
                                </motion.div>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.25, duration: 0.4 }}
                                    className="text-black dark:text-white mb-6"
                                >
                                    {selectedProject.detailedDescription}
                                </motion.p>

                                <div className="flex justify-between items-center">
                                    <motion.div
                                        initial={{ x: -15, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.4 }}
                                        className="flex space-x-3.5"
                                    >
                                        {selectedProject.tech.map((t) => (
                                            <motion.div key={t.name} className="relative group" whileHover={{scale: 0.9, filter: "brightness(0.7)"}}>
                                                <t.Icon size={36} style={t.color ? { color: t.color } : undefined} />
                                                <div className="icon-tooltip">{t.name}</div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                    <motion.a
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.35, duration: 0.4, type: "spring" }}
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub size={36} />
                                        </motion.button>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;