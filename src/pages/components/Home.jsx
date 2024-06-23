import Nav from "../Home_pages/nav"
import Hero from "../Home_pages/Hero";
import About from "../Home_pages/About";
import Projects from "../Home_pages/Projects";
import Services from "../Home_pages/Services";
import Skills from "../Home_pages/Skills";
import Contact from "../Home_pages/Contact";
import Menu from "../Home_pages/Menu";
import Sidebar from "../Home_pages/Sidebar";
function Home() {
    return (
        <div>
            <div className="nav-container">  
                <div className="nav">
                    <Nav/>
                </div>
                <div className="menu">
                    <Menu/>
                </div>
                <div className="side">
                    <Sidebar/>
                </div>
            </div>
            <header>
                <div className="container" id="header">
                    <Hero/>
                </div>
            </header>
            <section className="about" id="about">
                    <About/>
            </section>
            <section className="projects" id="projects">
                <Projects/>
            </section>
            <section className="skills" id="skills">
                <Skills/>
            </section>
            <section className="contact" id="contact">
                <Contact/>
            </section>
            <section className="services" id="services">
                <Services/>
            </section>
        </div>
    )
}

export default Home
