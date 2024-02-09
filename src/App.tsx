import './App.css'
import Hero from "./components/Hero.tsx";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import ContactMe from "./components/ContactMe.tsx";

function App() {
    return (
        <>
            <div className='px-4'>
                <Nav>
                    <Hero/>
                </Nav>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <ContactMe></ContactMe>
            </div>
            <Footer/>
        </>
    )
}

export default App
