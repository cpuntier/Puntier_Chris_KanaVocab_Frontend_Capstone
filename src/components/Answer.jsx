export default function Answer({ kana, current, setCurrent, answer, score, setScore,report,setReport }) {

    function clickHandler(e) { //handle answering question
        if (kana.jp_kana == answer[0].jp_kana) { //question is right
            const node = e.target;
            e.target.style.backgroundColor = "green";
            setTimeout(() => {
                setCurrent(current + 1);
                setScore(score + 1)
                node.style.backgroundColor = "#1a1a1a";
                node.style.border = "";

            }, 1000);
            setReport([...report,
                {
                    kana: answer[0].jp_kana,
                    answer:answer[0].en_romaji,
                    yourAnswer:kana.en_romaji,
                    result : true
                }
            ])
    
        } else {
            // console.log("kana:",kana.jp_kana,"answer:",answer.jp_kana) // question is wrong
            const node = e.target;
            e.target.style.backgroundColor = "red";
            setTimeout(() => {
                setCurrent(current + 1);
                node.style.backgroundColor = "#1a1a1a";
            }, 1000);
            setReport([...report,
                {
                    kana: answer[0].jp_kana,
                    answer:answer[0].en_romaji,
                    yourAnswer:kana.en_romaji,
                    result : false
                }
            ])
    
    
        }
    }

    return (
        // Display appropriate answer choice
        <div className="Answer" style={{ margin: "1em", fontSize: "20pt" }}> 
            <button
                style={{ width: "15vw", height: "5vh", margin: "10" }}

                onClick={(e) => { clickHandler(e) }}>{kana.en_romaji}</button>
        </div>
    )
}



// setCurrent(current + 1); if (kana.jp_kana === answer[0]) { setScore(score + 1) } }