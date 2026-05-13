import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    len: number;
    speed: number;
    angle: number;
    opacity: number;
    fade: "in" | "out";
    width: number;
}

const SPAWN_INTERVAL_MIN = 4000;
const SPAWN_INTERVAL_MAX = 12000;

const ShootingStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let stars: Star[] = [];
        let spawnTimer: ReturnType<typeof setTimeout>;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const spawn = () => {
            const angle = (Math.random() * 30 + 20) * (Math.PI / 180);
            const startSide = Math.random();
            let x: number, y: number;

            if (startSide < 0.7) {
                x = Math.random() * canvas.width;
                y = -20;
            } else {
                x = canvas.width + 20;
                y = Math.random() * canvas.height * 0.4;
            }

            stars.push({
                x,
                y,
                len: Math.random() * 120 + 60,
                speed: Math.random() * 6 + 8,
                angle,
                opacity: 0,
                fade: "in",
                width: Math.random() * 1.5 + 0.5,
            });

            const next = Math.random() * (SPAWN_INTERVAL_MAX - SPAWN_INTERVAL_MIN) + SPAWN_INTERVAL_MIN;
            spawnTimer = setTimeout(spawn, next);
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = stars.length - 1; i >= 0; i--) {
                const s = stars[i];

                s.x += Math.cos(s.angle) * s.speed;
                s.y += Math.sin(s.angle) * s.speed;

                if (s.fade === "in") {
                    s.opacity = Math.min(s.opacity + 0.06, 1);
                    if (s.opacity >= 1) s.fade = "out";
                } else {
                    s.opacity = Math.max(s.opacity - 0.015, 0);
                }

                if (
                    s.opacity <= 0 ||
                    s.x > canvas.width + 200 ||
                    s.y > canvas.height + 200 ||
                    s.x < -200
                ) {
                    stars.splice(i, 1);
                    continue;
                }

                const tailX = s.x - Math.cos(s.angle) * s.len;
                const tailY = s.y - Math.sin(s.angle) * s.len;

                const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
                grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
                grad.addColorStop(0.6, `rgba(1, 167, 255, ${s.opacity * 0.4})`);
                grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(s.x, s.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = s.width;
                ctx.lineCap = "round";
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.width + 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity * 0.8})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(draw);
        };

        const initialDelay = Math.random() * 3000 + 1000;
        spawnTimer = setTimeout(spawn, initialDelay);
        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            clearTimeout(spawnTimer);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[1]"
            aria-hidden="true"
        />
    );
};

export default ShootingStars;
