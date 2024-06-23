import { Link } from "react-scroll"
function nav() {
    return (
        <nav className="flex items-centre  justify-between">  
            <div className="left flex justfiy-right ">  
                <div className="logo">  
                    <img src="images/logo.png" width="50px" alt="logo"/>  
                </div>  
                <div>  
                <Link className="scroll" to="header" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>  
                <Link  className="scroll"  to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>  
                <Link  className="scroll" to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>  
                <Link className="scroll"  to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link> 
                <Link  className="scroll" to="services" spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
                </div>  
            </div>  
            <div className="right">  
                <button className="btn btn-primary"><Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></button>  
            </div>  
        </nav>
    )
}

export default nav
