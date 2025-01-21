import {AnimatePresence, motion} from "framer-motion";
import {FaLinkedinIn, FaGithub, FaRegFile, FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt} from "react-icons/fa";
import {useState} from "react";
import {RiCloseLargeFill, RiFirebaseFill, RiTailwindCssFill} from "react-icons/ri";
import {SiPostgresql, SiTypescript} from "react-icons/si";
import Orbit from "../components/Orbit";
const number = 95;
const icons = [
    {
        id: 1,
        name: "TypeScript",
        icon: <SiTypescript size={number}/>,
        color: "#3178c6"
    },
    {
        id: 2,
        name: "CSS",
        icon: <FaCss3Alt size={number}/>,
        color: "#264de4"
    },
    {
        id: 3,
        name: "HTML",
        icon: <FaHtml5 size={number}/>,
        color: "#e34c26"
    },
    {
        id: 4,
        name: "Tailwind",
        icon: <RiTailwindCssFill size={number}/>,
        color: "#38bdf8"
    },
    {
        id: 5,
        name: "Java",
        icon: <FaJava size={number}/>,
        color: "#5382a1"
    },
    {
        id: 6,
        name: "Python",
        icon: <FaPython size={number}/>,
        color: "#306998"
    },
    {
        id: 7,
        name: "React",
        icon: <FaReact size={number}/>,
        color: "#26d9fd"
    },
    {
        id: 8,
        name: "Firebase",
        icon: <RiFirebaseFill size={number}/>,
        color: "#ffcb2d"
    },
    {
        id: 9,
        name: "PostgreSQL",
        icon: <SiPostgresql size={number}/>,
        color: "#336791"
    },
];


const Intro = ({ modalOpen, setModalOpen }) => {
    //const [modalOpen, setModalOpen] = useState(false);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "Portfolio Contact Form",
        honeypot: "",
        message: "",
        replyTo: "@",
        // @ts-ignore
        accessKey: import.meta.env.VITE_ACCESS_KEY,
    });

    const [response, setResponse] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.staticforms.xyz/submit", {
                method: "POST",
                body: JSON.stringify(contact),
                headers: { "Content-Type": "application/json" },
            });

            const json = await res.json();

            if (json.success) {
                setResponse({
                    type: "success",
                    message: "Thank you for reaching out! Your message has been delivered to my email and I will respond back as soon as I can.",
                });
                // Reset form
                setContact({
                    ...contact,
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                setResponse({
                    type: "error",
                    message: json.message,
                });
            }
        } catch (e) {
            console.log("An error occurred", e);
            setResponse({
                type: "error",
                message: "An error occurred while submitting the form.",
            });
        }
    };

    return (
        <>
            <div className="text-black dark:text-white justify-center text-left px-8 lg:px-36 py-16 mt-[10vh]">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                    <div className="flex-1">
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold flex flex-col">
                    Hi,
                    <span>
                        I'm <span className="text-[#01a7ff] font-bold">Kyrellos</span>
                        <motion.span
                            className="pl-2.5 inline-block cursor-default pt-2"
                            animate={{rotate: 0}}
                            whileHover={{
                                rotate: [0, -10, 10, -10],
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
                    </div>
                {/* Icons in Orbit */}
                    <div className="lg:w-1/2 xl:w-2/5">
                        <Orbit icons={icons}/>
                    </div>
                </div>
                <AnimatePresence>
                    {modalOpen && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.25}}
                            className="fixed inset-0 flex items-center justify-center z-50 modal-section bg-opacity-95 bg-black"
                        >
                            <motion.div
                                initial={{y: "100vh"}}
                                animate={{y: 0}}
                                exit={{y: "100vh"}}
                                transition={{delay: 0.1, duration: 0.2}}
                                className="bg-white dark:bg-[#242424] text-black dark:text-white p-8 rounded-xl shadow-2xl h-[80%] w-[75%] flex flex-col relative overflow-y-auto"
                            >
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute right-4 top-4 p-2 bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 rounded"
                                >
                                    <RiCloseLargeFill size={24}/>
                                </button>

                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full md:w-1/2 pr-8">
                                        <motion.div
                                            initial={{opacity: 0, x: -20}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{delay: 0.3}}
                                        >
                                            <h2 className="text-3xl font-semibold mb-6">Here's some more info about
                                                me.</h2>
                                            <p className="text-xl mb-8">
                                                I'm an aspiring Software Engineer based in Nashville, Tennessee.
                                                I am currently exploring mobile and web development, and data analytics.
                                                Some hobbies of mine include rock climbing, pickleball, and chess.
                                            </p>

                                            {/* Contact Form Section */}
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                transition={{delay: 0.4}}
                                            >
                                                <h3 className="text-2xl font-semibold mb-4 text-[#01a7ff]">Get in
                                                    Touch</h3>

                                                {response.type === "success" && (
                                                    <div
                                                        className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-lg">
                                                        {response.message}
                                                    </div>
                                                )}
                                                {response.type === "error" && (
                                                    <div
                                                        className="mb-6 p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-lg">
                                                        {response.message}
                                                    </div>
                                                )}

                                                {(!response.type || response.type === "error") && (
                                                    <form onSubmit={handleSubmit} className="space-y-4">
                                                        <input type="hidden" name="accessKey"
                                                               value={contact.accessKey}/>
                                                        <input type="hidden" name="subject" value={contact.subject}/>
                                                        <input
                                                            type="hidden"
                                                            name="honeypot"
                                                            value={contact.honeypot}
                                                            style={{display: "none"}}
                                                        />

                                                        <div>
                                                            <label htmlFor="name"
                                                                   className="block text-sm font-medium mb-1">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                value={contact.name}
                                                                onChange={handleChange}
                                                                required
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                                                     dark:border-gray-600 dark:bg-gray-700 dark:text-white
                                                                     focus:ring-2 focus:ring-[#01a7ff] focus:border-transparent"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email"
                                                                   className="block text-sm font-medium mb-1">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={contact.email}
                                                                onChange={handleChange}
                                                                required
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                                                     dark:border-gray-600 dark:bg-gray-700 dark:text-white
                                                                     focus:ring-2 focus:ring-[#01a7ff] focus:border-transparent"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="message"
                                                                   className="block text-sm font-medium mb-1">
                                                                Message
                                                            </label>
                                                            <textarea
                                                                id="message"
                                                                name="message"
                                                                value={contact.message}
                                                                onChange={handleChange}
                                                                required
                                                                rows={4}
                                                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                                                     dark:border-gray-600 dark:bg-gray-700 dark:text-white
                                                                     focus:ring-2 focus:ring-[#01a7ff] focus:border-transparent"
                                                            />
                                                        </div>
                                                        <motion.button
                                                            type="submit"
                                                            whileHover={{scale: 1.05}}
                                                            whileTap={{scale: 0.95}}
                                                            className="w-full bg-[#01a7ff] text-white py-3 px-8 rounded-lg
                                                                 hover:bg-[#0186cc] transition-colors text-lg font-medium"
                                                        >
                                                            Send Message
                                                        </motion.button>
                                                    </form>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className="w-full md:w-1/2"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        transition={{delay: 0.4}}
                                    >
                                        <h3 className="text-2xl font-semibold mb-6 text-[#01a7ff]">Technologies I Work
                                            With</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
                                            {icons.map((icon, index) => (
                                                <motion.div
                                                    key={icon.id}
                                                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow"
                                                    initial={{opacity: 0, y: 20}}
                                                    animate={{opacity: 1, y: 0}}
                                                    whileHover={{scale: 1.05}}
                                                    transition={{
                                                        delay: index * 0.1,
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                >
                                                    <motion.div
                                                        style={{color: icon.color}}
                                                        animate={{y: [0, -5, 0]}}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatType: "reverse",
                                                            ease: "easeInOut",
                                                            delay: index * 0.1
                                                        }}
                                                    >
                                                        {icon.icon}
                                                    </motion.div>
                                                    <span
                                                        className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                                    {icon.name}
                                                </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Intro;