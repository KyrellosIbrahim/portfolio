import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorSpotlight from "./components/CursorSpotlight";
import React from "react";

export default function App() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>
            <CursorSpotlight />
            {/* Ambient glow layer — fixed behind all content */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="glow-blob-1 absolute -top-48 -left-32 w-[700px] h-[700px] rounded-full bg-[#01a7ff]/[0.13] dark:bg-[#01a7ff]/[0.06] blur-[140px]" />
                <div className="glow-blob-2 absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-violet-500/[0.09] dark:bg-violet-500/[0.05] blur-[140px]" />
                <div className="glow-blob-3 absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-400/[0.08] dark:bg-sky-500/[0.04] blur-[120px]" />
            </div>
            <Header setModalOpen={setModalOpen}/>
            <Intro modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <Experience />
            <Projects />
            <Footer setModalOpen={setModalOpen}/>
        </>
    )
}
