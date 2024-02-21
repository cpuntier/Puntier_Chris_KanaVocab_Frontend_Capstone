import "../styles/footer.css"
import { useLocation } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    const path = useLocation()
    console.log("Footer is htere0", path)
    if (path.pathname != "/selection") {
        return (
            <>
                <div className="footer">
                    <p>
                     <a href="https://www.linkedin.com/in/chrispuntier/"><FaLinkedin /> Linkedin </a>   -
                     <a href="https://github.com/cpuntier"> <FaGithub /> Github</a> </p>
                </div>
            </>
        )
    }
}