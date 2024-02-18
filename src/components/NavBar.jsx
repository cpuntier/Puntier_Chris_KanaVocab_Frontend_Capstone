import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { SelectedContext } from "../App";
export default function NavBar() {

    const [selected, setSelected] = useContext(SelectedContext);

    function clearSelected() {
        setSelected([])
    }





    return (
        <>
            <div style={{ display: "flex" }}>
                <Link to="/">
                    <button onClick={clearSelected}>Home</button>
                </Link>
                <Link to="/chart">
                    <button onClick={clearSelected}>Chart</button>
                </Link>
                <button onClick={clearSelected}>FlashCards</button>
            </div>
        </>
    )
}