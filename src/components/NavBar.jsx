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
        <h1 style={{textAlign:"center"}}>KanaVocab Ver C</h1>
        <div style={{border:"solid 1px white", display:"flex", justifyContent:"space-around"}}>
                <Link to="/">
                    <button onClick={clearSelected}>Home</button>
                </Link>
                <Link to="/chart">
                    <button onClick={clearSelected}>Chart</button>
                </Link>
                <Link to="/flashcards">
                <button onClick={clearSelected}>FlashCards</button>
                </Link>
            </div>
        </>
    )
}