import logoDark from '../assets/Belmont University Logo.png';
import logoLight from '../assets/Belmont University Logo Vertical Reversed.png'

const Experience = () => {
    return (
        <div className="justify-center flex flex-col w-full text-left mx-auto text-black dark:text-white mt-[50vh] px-8 lg:px-36">
            <span className="text-5xl  md:text-6xl  justify-center font-medium pb-4">
                Here is my <span className="text-[#46d85b] font-bold">experience</span>
            </span>
            <div className="pb-4 flex flex-row items-center">
                <a
                    href="https://belmontsurfs.com/2023/07/05/kyrellos-ibrahim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-row items-center gap-4"
                >
                    <picture>
                        <source
                            srcSet="logoDark"
                            media="(prefers-color-scheme: dark)"
                        />
                        <img
                            src="logoLight"
                            alt="Belmont University Logo"
                            className="object-scale-down max-h-28"
                        />
                    </picture>
                    <div className="flex flex-col pl-1">
                        <h2
                            className="text-black dark:text-white font-semibold text-xl pb-2">
                            Research Intern, Belmont University
                        </h2>
                        <h3 className="text-black dark:text-white text-lg">
                            Experimented with a Python-based simulation tool that helps to understand how light
                            interacts
                            with tiny particles, making cutting-edge research tools more accessible to
                            university students.
                        </h3>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experience;