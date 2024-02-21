export default function Answer({ kana, current, setCurrent, answer, score, setScore }) {

    function clickHandler(e) {
        if (kana.jp_kana === answer[0]) {
            const node = e.target;
            e.target.style.backgroundColor = "green";
            setTimeout(() => {
                setCurrent(current + 1);
                setScore(score + 1)
                node.style.backgroundColor = "#1a1a1a";
                node.style.border = "";

            }, 1000);
        } else {
            const node = e.target;
            e.target.style.backgroundColor = "red";
            setTimeout(() => {
                setCurrent(current + 1);
                node.style.backgroundColor = "#1a1a1a";
            }, 1000);
        }
    }

    return (
        <div className="Answer" style={{ margin: "1em", fontSize: "20pt" }}>
            <button
                style={{ width: "15vw", height: "5vh", margin: "10" }}

                onClick={(e) => { clickHandler(e) }}>{kana.en_romaji}</button>
        </div>
    )
}



// setCurrent(current + 1); if (kana.jp_kana === answer[0]) { setScore(score + 1) } }