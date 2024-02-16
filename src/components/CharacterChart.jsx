import { useEffect, useState } from "react"
import axios from 'axios'
import KanaTiles from "./KanaTiles"

export default function CharacterChart(props) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            try {
                const characters = await axios.get("http://localhost:8000/" + props.kana)
                console.log(characters);
                setCharacters(characters.data);
            } catch (error) {
                console.log(error);
            }

        } getCharacters();
    }, [props.kana])



    return (
        <>
            {characters.map((item) => {
                return <>
                    <KanaTiles kana={item} />
                </>
            })}

        </>
    )
}