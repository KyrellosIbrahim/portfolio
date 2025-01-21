import React from 'react';
import { motion } from 'framer-motion';

const OrbitingIcons = ({ icons }) => {
    const containerSizes = {
        base: 'w-[300px] h-[300px]',
        md: 'md:w-[400px] md:h-[400px]',
        lg: 'lg:w-[500px] lg:h-[500px]'
    };

    const iconSize = 40;
    const orbitRadius = 120; // Fixed radius for the orbit

    return (
        <div className={`relative ${containerSizes.base} ${containerSizes.md} ${containerSizes.lg}`}>
            {icons.map((icon, index) => {
                const angle = (index * (360 / icons.length));

                return (
                    <motion.div
                        key={icon.id}
                        className="absolute left-1/2 top-1/2"
                        animate={{
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: orbitRadius * 2,
                            height: orbitRadius * 2,
                            marginLeft: -orbitRadius,
                            marginTop: -orbitRadius,
                        }}
                    >
                        <motion.div
                            className="absolute"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
                            }}
                        >
                            <motion.div
                                className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-full p-2 shadow-lg"
                                style={{
                                    color: icon.color,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {React.cloneElement(icon.icon, {
                                    size: iconSize,
                                })}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default OrbitingIcons;