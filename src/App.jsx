import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <>
            <Header setModalOpen={setModalOpen}/>
            <Intro modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <Experience />
            <Projects />
            <Footer setModalOpen={setModalOpen}/>
        </>

    )
}
