import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = ({ className = "" }) => {
    return (
        <div className={`flex ${className}`}>
            <a href="#experience" className="px-4 hover:text-blue-700 transition-colors">Experience</a>
            <a href="#projects" className="px-4 hover:text-blue-700 transition-colors">Projects</a>
            <a href="#contact" className="px-4 hover:text-blue-700 transition-colors">Contact</a>
            <a href="Resume" className="px-4 hover:text-blue-700 transition-colors">Resume</a>
        </div>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const iconVariants = {
        closed: { rotate: 0, scale: 1 },
        open: { rotate: -90, scale: 1.2 },
    };

    return (
        <header className="sticky top-0 z-[1] mx-auto w-full max-w-7xl font-Sans font-bold uppercase text-text-primary backdrop-blur-[100px]">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-500 p-8">
                <a href="/" className="text-2xl font-semibold">Kyrellos Ibrahim</a>

                <nav className="flex items-center">
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavLinks className="space-x-2" />
                    </div>

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
                            <NavLinks className="flex-col items-end space-y-4 pt-4" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;