import { motion } from "framer-motion";
import { useEffect, useState } from "react";



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
                            rotate: [0, -45, 45, -45],  // Start from 0, go to -45, then oscillate
                            transition: {
                                times: [0, 0.33, 0.66, 1],
                                duration: 2,
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
                    I'm a third-year Computer Science student at Belmont University, with a keen eye
                    for attention to detail. I'm currently looking for internship opportunities.
                    Feel free to browse my projects and learn more about me!
                </p>
            </div>
        </>
    );
}

export default Intro;