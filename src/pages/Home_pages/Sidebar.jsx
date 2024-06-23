import { Link } from "react-scroll"
import { useContactApi } from "../../Contaxt/contaxt"
import { HiHome, HiUserCircle,HiAcademicCap, HiServer } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { HiMail } from "react-icons/hi";


function Sidebar() {
    const {isTrue}=useContactApi();

    return (
        <div className={`${isTrue?"side-bar active":"side-bar"}`}>
            <img src="images/logo.png" alt="profile photo"/>
            <h1>Jagadeesh Boina</h1>
            <ul>
                <li><Link to="header" spy={true} smooth={true} offset={-100} duration={500}>
                    <HiHome/>
                    <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                    <HiUserCircle/>
                    <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                    <HiAcademicCap />
                    <span>Skills</span>
                    </Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                    <GrProjects/>
                    <span>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
                    <HiServer/>
                    <span>Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <HiMail/>
                    <span>Contacts</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
