import { useState, useContext } from "react";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { SelectedContext } from "../App";
import "../styles/tooltip.css";


export default function Selection() {
    const [selected, setSelected] = useContext(SelectedContext)

    return (
        <>
            <h1>Check which lines you would like to test</h1>
            <Chart />



            <Link to="/startgame">
                {selected.length > 0 ? <button>Start Game</button> :
                    <div className="tooltip">

                        <button disabled>Start Game</button>
                        <p className="tooltiptoptext">Must select at least one line</p>
                    </div>}

            </Link>
        </>)
}