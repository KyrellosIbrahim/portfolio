import {useEffect, useState} from "react";
import { LuMenu, LuX, LuMoon, LuSun } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = ({ className = "", setModalOpen }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const scrollToProjects = (e) => {
        e.preventDefault();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    // dark mode throughout the website
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`flex items-center ${className}`}>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white
                transition-colors ease-in-out dark:bg-white dark:text-black"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <LuSun size={16} /> : <LuMoon size={16} />}
            </motion.button>
            <div className="flex items-center md:space-x-2">
                <a href="#projects" className="px-4 hover:text-[#01a7ff] transition-colors" onClick={scrollToProjects}>Projects</a>
                <a href="#contact" className="px-4 hover:text-[#01a7ff] transition-colors" onClick={() => setModalOpen(true)}>Contact</a>
                <a href="https://drive.google.com/file/d/1dsBgml3P4gRB8Yj3vnwwgkFuFzho2acc/view?usp=drive_link"
                   target="_blank" rel="noopener noreferrer"
                   className="px-4 hover:text-[#01a7ff] transition-colors">Resume</a>
            </div>
        </div>
    );
};

const Header = ({ setModalOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const iconVariants = {
        closed: { rotate: 0, scale: 1 },
        open: { rotate: -90, scale: 1.2 },
    };

    return (
        <header className="top-0 z-[1] mx-auto w-full max-w-7xl font-Sans font-bold uppercase text-text-primary
            dark:text-white">
            <div className="flex flex-wrap items-center justify-between p-8">
                <motion.a
                    initial={{y: "-2vh", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.4, ease: "easeInOut"}}
                    onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    href="/" className="text-2xl font-semibold ease-in">Kyrellos Ibrahim</motion.a>

                <nav className="flex items-center">
                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{y: "-2vh", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.4, ease: "easeInOut"}}
                        className="hidden md:block">
                        <NavLinks setModalOpen={setModalOpen}/>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleNavBar}
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                            whileTap={{ scale: 0.9 }}
                            className="p-2"
                        >
                            <motion.div
                                variants={iconVariants}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <motion.div
                            className="w-full md:hidden"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <NavLinks className="flex-col items-end space-y-4 pt-4" setModalOpen={setModalOpen}/>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;