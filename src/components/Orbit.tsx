// @ts-ignore
import React from 'react';
import { motion } from 'framer-motion';

const OrbitingIcons = ({ icons }) => {
    const containerSizes = {
        base: 'w-[150px] h-[150px]',
        md: 'md:w-[400px] md:h-[400px]',
        lg: 'lg:w-[500px] lg:h-[500px]'
    };

    const iconSize = 35;
    const orbits = [
        { radius: 135, duration: 40, rotation: -360 }, // Outer ring
        { radius: 75, duration: 30, rotation: 360}, // Inner ring
    ];

    // Separate icons into inner and outer rings based on outerRing property
    const distributeIcons = () => {
        return orbits.map((_, index) =>
            icons.filter(icon => index === 0 ? icon.outerRing : !icon.outerRing)
        );
    };

    const distributedIcons = distributeIcons();

    return (
        <div className={`relative ${containerSizes.base} ${containerSizes.md} ${containerSizes.lg} flex flex-wrap`}>
            {/* Orbit Paths */}
            {orbits.map((orbit, index) => (
                <div
                    key={`orbit-path-${index}`}
                    className="absolute left-1/2 top-1/2 border border-gray-400 rounded-full"
                    style={{
                        width: orbit.radius * 2,
                        height: orbit.radius * 2,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}

            {/* Orbiting Icons */}
            {orbits.map((orbit, orbitIndex) => (
                <React.Fragment key={`orbit-${orbitIndex}`}>
                    {distributedIcons[orbitIndex].map((icon) => {
                        return (
                            <motion.div
                                key={icon.id}
                                className="absolute left-1/2 top-1/2"
                                animate={{
                                    rotate: [0, orbit.rotation]
                                }}
                                transition={{
                                    duration: orbit.duration,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    width: orbit.radius * 2,
                                    height: orbit.radius * 2,
                                    marginLeft: -orbit.radius,
                                    marginTop: -orbit.radius,
                                }}
                            >
                                <motion.div
                                    className="absolute"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        transform: `rotate(${icon.position}deg) translateX(${orbit.radius}px) rotate(-${icon.position}deg)`,
                                    }}
                                >
                                    <div
                                        className="flex items-center justify-center  rounded-full p-2 "
                                        style={{
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        {React.cloneElement(icon.icon, {
                                            size: iconSize,
                                        })}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </React.Fragment>
            ))}
        </div>
    );
};

export default OrbitingIcons;