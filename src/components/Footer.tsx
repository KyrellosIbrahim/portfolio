import {motion} from "framer-motion";

const Footer = ({setModalOpen}) => {
    const currentYear = new Date().getFullYear();
    const footer = [
        {
            id: 1,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/kyrellosibrahim/"
        },
        {
            id: 2,
            text: "Contact",
            link: "#",
            onClick: (e) => {
                e.preventDefault();
                setModalOpen(true);
            }
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
        <div className="w-full bg-[#242424] items-center justify-center content-center flex flex-col min-h-60">
            <div className="w-full flex flex-col text-white text-center p-4">
                <div className="w-full flex flex-row text-white justify-center">
                    <div className="w-6/12 flex justify-between flex-wrap">
                        {footer.map((foot) => (
                            <motion.a
                                key={foot.id}
                                href={foot.link}
                                target={foot.link !== "#" ? "_blank" : ""}
                                rel={foot.link !== "#" ? "noopener noreferrer" : ""}
                                className="hover:text-[#01a7ff] p-4"
                                onClick={foot.onClick}
                            >
                                {foot.text}
                            </motion.a>
                        ))}
                    </div>
                </div>
                <span className="justify-center mt-12">
                    Copyright © {currentYear} Kyrellos Ibrahim
                </span>
            </div>
        </div>
    )
}

export default Footer;