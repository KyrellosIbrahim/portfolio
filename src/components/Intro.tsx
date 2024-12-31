import {motion} from "framer-motion";
import {FaLinkedinIn, FaGithub, FaRegFile} from "react-icons/fa";



const Intro = () => {
    return (
        <>
            <div className="text-black dark:text-white justify-center text-left px-8 lg:px-36 py-16 mt-[10vh]">
                <span
                className="text-5xl  md:text-6xl lg:text-7xl xl:text-8xl font-semibold flex flex-col">
                    Hi,
                <span>I'm <span className="text-[#02D0B3] font-bold">Kyrellos</span>
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
                    check out my projects and reach out!
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
                            className="bg-[#02D0B3] text-white rounded-full p-2 mx-2"
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
                            className="bg-[#02D0B3] text-white rounded-full p-2 mx-2"
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
                            className="bg-[#02D0B3] text-white rounded-full p-2 mx-2"
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