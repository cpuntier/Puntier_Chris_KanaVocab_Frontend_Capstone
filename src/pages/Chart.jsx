import { useState, useContext } from 'react';
import CharacterChart from '../components/CharacterChart';
import { KanaContext } from '../App';

export default function Chart(props) {
    // const [kanaState, setKanaState] = useState("hiragana")
    const [kanaState,setKanaState] = useContext(KanaContext);

    return (
            <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={() => setKanaState("hiragana")}>Hiragana</button>
                    <button onClick={() => setKanaState("katakana")}>Katakana</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <CharacterChart kana={kanaState} selected={props.selected} setSelected={props.setSelected} />

                </div>
            </>
    )
}