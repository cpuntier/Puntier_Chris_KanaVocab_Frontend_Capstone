import { useState, useContext } from "react";
import Chart from "./Chart";
import { Link } from "react-router-dom";
import { SelectedContext } from "../App";


export default function Selection() {
    const [selected, setSelected] = useContext(SelectedContext)

    return (
        <>
            <h1>Select your stuff</h1>
            <Chart />
            <Link to="/startgame">
                {selected.length > 0 ? <button>Start Game</button> : <button disabled>Start Game</button>}

            </Link>
        </>)
}