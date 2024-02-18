import { useContext, useEffect, useState } from "react"
import { SelectedContext, KanaContext } from "../App"
import axios from "axios";
import Answer from "../components/Answer";

export default function StartGame(props) {
    const [selected, setSelected] = useContext(SelectedContext);
    const [kanaState, setKanaState] = useContext(KanaContext);
    console.log("This is the kanastate", kanaState);

    const [current, setCurrent] = useState(0);
    const [shuffled, setShuffled] = useState([...selected.flat(1).sort(() => Math.random() - 0.5)])
    const [answers, setAnswers] = useState([]);
    const [inputState, setInputState] = useState(null);


    useEffect(() => {
        setAnswers([shuffled[current], ...shuffled.filter((item) => item.jp_kana != shuffled[current].jp_kana).slice(0, 3)].sort(() => Math.random() - 0.5))
    }, [current])





    // useEffect(() => {
    // async function getanswers() {
    //     try {
    //         const answers = await axios.get("http://localhost:8000/" + kanaState + "/random");
    //         console.log(answers.data);
    //         setanswers(answers.data.filter((item)=> item.jp_kana !=shuffled[current].jp_kana
    //         ));
    //     } catch (error) {
    //         console.log(error)
    //     }

    // };
    // getanswers();
    // shuffled = selected.flat(1);
    // shuffled = shuffled.sort(() => Math.random() - 0.5);
    // setSelected([...shuffled]),
    // () => {
    //     selected.filter()
    // }


    // }, [])



    return (<>
    {inputState?  <div>
            {shuffled[current].jp_kana}
            {inputState === "multi" ? "Multiple choice" : inputState==="direct" ? "Input" : <></>}
            {selected.length > 0 && answers.length > 0 ?
                <>
                    <Answer kana={answers[0]} current={current} setCurrent={setCurrent} />
                    <Answer kana={answers[1]} current={current} setCurrent={setCurrent} />
                    <Answer kana={answers[2]} current={current} setCurrent={setCurrent} />
                    <Answer kana={answers[3]} current={current} setCurrent={setCurrent} />
                </> : <>Loading</>
            }

        </div> 
    
    
    : <>
    <button onClick={()=>setInputState("multi")}>
        Multiple Choice        
    </button>
    <button onClick={() => setInputState("direct")}>
    Direct Input</button>
    </>
}
        

    </>)
}