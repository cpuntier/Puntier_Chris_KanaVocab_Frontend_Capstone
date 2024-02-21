import "../styles/footer.css"
import { useLocation } from "react-router-dom"
export default function Footer() {
    const path = useLocation()
    console.log("Footer is htere0", path)
    if (path.pathname != "/selection") {
        return (
            <>
                <div className="footer">
                    <p>About - Linkedin - Github - Email</p>
                </div>
            </>
        )
    }
}