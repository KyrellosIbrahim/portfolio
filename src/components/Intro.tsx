import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaRegFile } from "react-icons/fa";



const Intro = () => {
    return (
        <>
            <div className="text-black dark:text-white justify-center text-center px-8 lg:px-36 py-16">
                <span className="text-8xl font-semibold">
                    Hi, I'm <span className="text-[#0084ff] font-bold">Kyrellos</span>
                    <motion.span
                        className="pl-2.5 inline-block cursor-default"
                        animate={{rotate: 0}}
                        whileHover={{ // waving animation on hover
                            rotate: [0, -25, 25, -25],  // Start from 0, go to -45, then oscillate
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
                <p className="text-black dark:text-white py-4 justify-center text-center text-2xl">
                    I'm a third-year Computer Science student at Belmont University, passionate about
                    detail-oriented development and seeking internship opportunities. Feel free to
                    check out my projects and reach out!
                </p>
                <div className="flex justify-center">
                    <a
                        href="https://github.com/KyrellosIbrahim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                    >
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
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
                            className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
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
                            className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
                        >
                            <FaRegFile size={24}/>
                        </motion.button>
                        <span className="icon-tooltip">Resume</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Intro;