import {motion} from "framer-motion";

const Footer = () => {
    const footer = [
        {
            id: 1,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/kyrellosibrahim/"
        },
        {
            id: 2,
            text: "Contact",
            link: "TODO",
        },
        {
            id: 3,
            text: "GitHub",
            link: "https://github.com/KyrellosIbrahim"
        },
        {
            id: 4,
            text: "Instagram",
            link: "https://www.instagram.com/kyrelloss/"
        }
    ];

    return (
        <div className="w-full bg-[#242424] items-center justify-center content-center flex flex-col h-60">
            <div className="w-full flex flex-col text-white text-center p-4">
                <div className="w-full flex flex-row text-white justify-center">
                    <div className="w-6/12 flex justify-between">
                        {footer.map((foot) => (
                            <motion.a
                                key={foot.id}
                                href={foot.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#01a7ff]"
                            >
                                {foot.text}
                            </motion.a>
                        ))}
                    </div>
                </div>
                <span className="justify-center mt-8">
                    Copyright © 2025 Kyrellos Ibrahim
                </span>
            </div>
        </div>
    )
}

export default Footer;