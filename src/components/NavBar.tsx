import { useState, useEffect } from 'react';
import { LuMenu, LuX } from "react-icons/lu";


const NavLinks = () => {
    return (
        <>
            <a href={"#experience"}>Experience</a>
            <a href={"#projects"}>Projects</a>
            <a href={"#contact"}>Contact</a>
            <a href={"Resume"}>Resume</a>
        </>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // menu
    const toggleNavBar = () => { // toggle menu
        setIsOpen(!isOpen);
    };
    return (
        <>
    <nav className="flex w-1/3 justify-end">
        <div></div>
        <div className="hidden justify-between md:flex w-full">
            <NavLinks/>
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavBar}>{isOpen ? <LuX /> : <LuMenu />}
            </button>
        </div>
    </nav>
    {isOpen && (
        <div className="flex basis-full flex-col items-center mx-auto">
            <NavLinks/>
        </div>
    )}
        </>
    );
};



export default NavBar;