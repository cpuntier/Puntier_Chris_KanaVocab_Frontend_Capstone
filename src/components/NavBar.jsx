import { Link } from "react-router-dom"
export default function NavBar() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <Link to = "/">
                <button>Home</button>
                </Link>
                <Link to = "/chart">
                <button>Chart</button>
                </Link>
                <button>FlashCards</button>
            </div>
        </>
    )
}