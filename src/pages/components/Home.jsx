import Nav from "../Homepages/nav"
import Hero from "../Homepages/Hero";
import About from "../Homepages/About";
import Projects from "../Homepages/Projects";
import Services from "../Homepages/Services";
import Skills from "../Homepages/Skills";
import Contact from "../Homepages/Contact";
import Menu from "../Homepages/Menu";
import Sidebar from "../Homepages/Sidebar";
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
