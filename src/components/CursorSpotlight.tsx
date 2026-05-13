import { useEffect, useRef } from "react";

const CursorSpotlight = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (ref.current) {
                ref.current.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(1,167,255,0.08), transparent 70%)`;
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            ref={ref}
            className="pointer-events-none fixed inset-0 z-[10] hidden md:block"
        />
    );
};

export default CursorSpotlight;
