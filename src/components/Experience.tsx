// @ts-ignore
import belmontLogo from '../assets/Belmont-University-Logo-Vertical-Reversed.png'
// @ts-ignore
import HCALogo from '../assets/HCA_logo_primary_white-orange.png'
import { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    const experiences = [
        {
            id: 1,
            company: 'HCA Healthcare',
            title: 'Application Engineer Intern',
            description: 'Engineered a scalable boilerplate API with FastAPI, SQLAlchemy, and Pydantic that accelerated development of new APIs by 40%. Developed and optimized SQL queries powering critical analyst dashboards and enhanced application reliability using Python and cloud monitoring tools.',
            link: '',
            logo: HCALogo
        },
        {
            id: 2,
            company: 'Belmont University',
            title: 'Undergraduate Researcher',
            description: 'Experimented with a Python-based simulation tool that helps to understand how light interacts with tiny particles, making cutting-edge research tools more accessible to university students.',
            link: 'https://belmontsurfs.com/2023/07/05/kyrellos-ibrahim/',
            logo: belmontLogo
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setIsVisible(false);
                    return;
                }
                setIsVisible(true);
            },
            {
                threshold: 0.1
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

    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Function to render experience item content
    const renderExperienceContent = (
        experience: {
            id?: number;
            company: any;
            title: any;
            description: any;
            link: any;
            logo: any;
        }) => (
        <>
            <motion.img
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="object-scale-down max-h-20 sm:max-h-24 md:max-h-32 rounded-full flex-shrink-0"
                whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.97 }}
            />
            <div className="flex flex-col pl-1">
                <h2 className="text-black dark:text-white font-semibold text-xl pb-2">
                    {experience.title}, {experience.company}
                </h2>
                <h3 className="text-black dark:text-white text-lg max-w-[24rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[28rem]">
                    {experience.description}
                </h3>
                {experience.link && (
                    <span className="text-[#01a7ff] text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more →
                    </span>
                )}
            </div>
        </>
    );

    return (
        <section id="experience">
            <div className="justify-center flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[40vh] px-8 lg:px-36">
            <span className="text-5xl md:text-6xl justify-center font-medium pb-16">
                Here is my <span className="text-[#01a7ff] font-bold">experience</span>
            </span>
                <motion.div
                    ref={elementRef}
                    className="pb-4 flex flex-wrap items-center gap-4"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {experiences.map(experience => {
                        // Common motion props for both linked and non-linked items
                        const motionProps = {
                            key: experience.id,
                            className: "group relative flex flex-row items-center gap-4 pb-8",
                            variants: itemVariants,
                            whileHover: {
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }
                        };

                        // Render either a link or a div based on whether there's a link
                        return experience.link ? (
                            <motion.a
                                {...motionProps}
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {renderExperienceContent(experience)}
                            </motion.a>
                        ) : (
                            <motion.div {...motionProps}>
                                {renderExperienceContent(experience)}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;