// @ts-ignore
import logo from '../assets/Belmont-University-Logo-Vertical-Reversed.png'
import { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";
const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When element leaves viewport, reset isVisible to false
                if (!entry.isIntersecting) {
                    setIsVisible(false);
                    return;
                }
                // When element enters viewport, set isVisible to true
                setIsVisible(true);
            },
            {
                threshold: 0.1 // Trigger when at least 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <section id="experience">
        <div className="justify-center flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[40vh] px-8 lg:px-36">
            <span className="text-5xl md:text-6xl justify-center font-medium pb-16">
                Here is my <span className="text-[#01a7ff] font-bold">experience</span>
            </span>
            <div
                ref={elementRef}
                className={`pb-4 flex flex-wrap items-center gap-4 transition-opacity duration-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <a
                    href="https://belmontsurfs.com/2023/07/05/kyrellos-ibrahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-row items-center gap-4"
                >
                    <motion.img
                        src={logo}
                        alt="Belmont University Logo"
                        className="object-scale-down max-h-20 sm:max-h-24 md:max-h-32 rounded-full flex-shrink-0"
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.97}}
                    />
                    <div className="flex flex-col pl-1">
                        <h2 className="text-black dark:text-white font-semibold text-xl pb-2">
                            Research Intern, Belmont University
                        </h2>
                        <h3 className="text-black dark:text-white text-lg max-w-[24rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[28rem]">
                            Experimented with a Python-based simulation tool that helps to understand how light
                            interacts with tiny particles, making cutting-edge research tools more accessible to
                            university students.
                        </h3>
                    </div>
                </a>
            </div>
        </div>
        </section>
    );
};

export default Experience;
