import { useState } from 'react';
import CharacterChart from '../components/CharacterChart';

export default function Chart() {
    const [kanaState, setKanaState] = useState("hiragana")
    return (
        <>
            <div>
                <button onClick={() => setKanaState("hiragana")}>Hiragana</button>
                <button onClick={() => setKanaState("katakana")}>Katakana</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <CharacterChart kana={kanaState} />

            </div>
        </>

    )
}