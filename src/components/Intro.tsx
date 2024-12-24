import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaRegFile } from "react-icons/fa";



const Intro = () => {
    return (
        <>
            <div className="text-black dark:text-white justify-center text-center px-8 lg:px-36 py-16 cursor-default">
                <span className="text-8xl font-semibold">
                    Hi, I'm <span className="text-[#0084ff] font-bold">Kyrellos</span>
                    <motion.span
                        className="pl-2.5 inline-block"
                        animate={{ rotate: 0 }}
                        whileHover={{
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
                <a
                    href="https://www.linkedin.com/in/kyrellosibrahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
                    >
                        <FaLinkedinIn size={24} />
                    </motion.button>
                </a>
                <a
                    href="https://github.com/KyrellosIbrahim"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
                    >
                        <FaGithub size={24} />
                    </motion.button>

                </a>
                <a
                    href="https://drive.google.com/file/d/1dsBgml3P4gRB8Yj3vnwwgkFuFzho2acc/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#0084ff] text-white rounded-full p-2 mx-2"
                        >
                        <FaRegFile size={24} />
                    </motion.button>
                </a>
            </div>
        </>
    );
}

export default Intro;