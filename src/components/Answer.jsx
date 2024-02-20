export default function Answer({ kana, current, setCurrent, answer, score, setScore }) {

    return (
        <div className="Answer" style={{margin:"1em", fontSize:"20pt"}}>
            <button
            style={{width:"15vw", height:"5vh",margin:"10"}}
            
            
            onClick={() => { setCurrent(current + 1); if (kana.jp_kana === answer[0]) { setScore(score + 1) } }}>{kana.en_romaji}</button>
        </div>
    )
}