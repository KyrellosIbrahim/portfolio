import {AnimatePresence, motion} from "framer-motion";
import {FaLinkedinIn, FaGithub, FaRegFile} from "react-icons/fa";
import {useState} from "react";
import { RiCloseLargeFill } from "react-icons/ri";


const Intro = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="text-black dark:text-white justify-center text-left px-8 lg:px-36 py-16 mt-[10vh]">
                <span
                className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-semibold flex flex-col">
                    Hi,
                <span>I'm <span className="text-[#01a7ff] font-bold">Kyrellos</span>
                <motion.span
                    className="pl-2.5 inline-block cursor-default"
                    animate={{rotate: 0}}
                    whileHover={{ // waving animation on hover
                    rotate: [0, -10, 10, -10],  // Start from 0, go to -10, then oscillate
                    transition: {
                    times: [0, 0.33, 0.66, 1],
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                    }
                }}
                >
                    👋
                </motion.span>
                </span>
                </span>
                <p className="text-black dark:text-white py-4 justify-center text-left text-lg sm:text-xl md:text-2xl max-w-xl">
                    I'm a third-year Computer Science student at Belmont University, and I am passionate about
                    detail-oriented design and seeking internship opportunities. Feel free to
                    check out my projects and
                    <motion.span
                        onClick={() => setModalOpen(true)}
                        className="cursor-pointer text-[#01a7ff] font-bold"
                    >
                        {" reach out!"}
                    </motion.span>
                </p>
                <div className="flex justify-left">
                    <a
                        href="https://github.com/KyrellosIbrahim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="bg-[#01a7ff] text-white rounded-full p-2 mx-2"
                        >
                            <FaGithub size={24}/>
                        </motion.button>
                        <span className="icon-tooltip">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kyrellosibrahim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="bg-[#01a7ff] text-white rounded-full p-2 mx-2"
                        >
                            <FaLinkedinIn size={24}/>
                        </motion.button>
                        <span className="icon-tooltip">LinkedIn</span>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1dsBgml3P4gRB8Yj3vnwwgkFuFzho2acc/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="bg-[#01a7ff] text-white rounded-full p-2 mx-2"
                        >
                            <FaRegFile size={24}/>
                        </motion.button>
                        <span className="icon-tooltip">Resume</span>
                    </a>
                </div>
                {/* Modal */}
                {modalOpen && (
                    <AnimatePresence>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.25}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 flex items-center justify-center z-50 modal-section bg-opacity-95 bg-black">
                        <motion.div
                            initial={{y: "100vh"}}
                            animate={{y: 0}}
                            transition={{delay: 0.1, duration: 0.2}}
                            className="bg-white dark:bg-[#242424] text-black dark:text-white p-4 rounded shadow-lg
                        h-[75%] w-[75%] flex-col relative">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute right-6 top-6 p-2 bg-transparent text-white rounded hover:bg-neutral-600"
                            >
                                <RiCloseLargeFill size={24}/>
                            </button>
                            <div
                                className="w-1/2"
                            >
                                <p className="text-3xl font-semibold pt-10 pl-10">Here's some more info about me.</p>
                                <p className="text-xl pt-6 pl-10">I'm an aspiring Software Engineer based in Nashville,
                                    Tennessee.
                                    I am currently exploring mobile and web development, and data analytics.
                                    Some hobbies of mine include rock climbing, pickleball, and chess.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </>
    );
}

export default Intro;