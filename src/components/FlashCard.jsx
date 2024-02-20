import { useState, useRef } from "react"
import "../styles/flashcard.css"


export default function FlashCard(props) {

    const [position, setPosition] = useState(true)
    const [flip, setFlip] = useState(false);
    return <>
        {/* <div style={{display:"flex", border:"solid 1px white", height:"15vh", width:"15vw",justifyContent:"center"}}>
            <div class="container">
                <div class="innercontainer">
                    <div class="front face">
                        {props.card.jp_side}
                    </div>
                    <div class="back face">
                        {props.card.en_side}
                    </div>
                </div>
            </div>
        </div> */}

        <div className={`card ${flip?"flip":""}`}>
        <div className="front" onClick={() => setFlip(!flip)}>Front</div>
        <div className="back" onClick={()=>setFlip(!flip)}>
            Back
        </div>
        </div>

    </>
}

{/* <div className="innerContainer" onClick={() => setPosition(!position)} style={{border:"solid 1px red", height: "20vh", width: "20vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {position ? props.card.en_side : props.card.jp_side}
            </div> */}
