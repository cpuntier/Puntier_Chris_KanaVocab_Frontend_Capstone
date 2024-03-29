import { useContext, useEffect, useState, useRef } from "react"
import { SelectedContext, KanaContext } from "../App"
import axios from "axios";
import Answer from "../components/Answer";
import { AiOutlineSelect } from "react-icons/ai";
import { BsInputCursorText } from "react-icons/bs";
import ScoreReport from "../components/ScoreReport";
import Footer from "../components/Footer";


export default function StartGame(props) {
    const [selected, setSelected] = useContext(SelectedContext);
    const [kanaState, setKanaState] = useContext(KanaContext);
    console.log("This is the kanastate", kanaState);

    const [current, setCurrent] = useState(0);
    const [shuffled, setShuffled] = useState([...selected.flat(1).sort(() => Math.random() - 0.5)])
    const [answers, setAnswers] = useState([]);
    const [inputState, setInputState] = useState(null);
    const [answer, setAnswer] = useState(null)
    const [score, setScore] = useState(0);
    const [report, setReport] = useState([])
 

    const inputRef = useRef(null);



    useEffect(() => {
        if (shuffled.length > current) {
            setAnswer([shuffled[current]]);
            setAnswers([shuffled[current], ...shuffled.filter((item) => item.jp_kana != shuffled[current].jp_kana).slice(0, 3)].sort(() => Math.random() - 0.5))
        }
    }, [current])


    function inputHandler(e) {
        const node = e.target;
        setReport([...report,
            {
                kana: shuffled[current].jp_kana,
                answer:shuffled[current].en_romaji,
                yourAnswer:inputRef.current.value,
                result : inputRef.current.value === shuffled[current].en_romaji,
            }
        ])

        if (inputRef.current.value === shuffled[current].en_romaji) {
            inputRef.current.style.backgroundColor="green"
            setTimeout(()=>{setCurrent(current+1);
                setScore(score + 1);
                setCurrent(current + 1);    
                inputRef.current.style.backgroundColor= "#242424";
                inputRef.current.value = ""
            },2000)

        } else {
            inputRef.current.style.backgroundColor = "red";
            setTimeout(()=>{setCurrent(current+1);
                inputRef.current.style.backgroundColor= "#242424";
                inputRef.current.value = ""
            },2000)

        }
    }



    return (<>
        {current >= shuffled.length ? <>Results {score}/{shuffled.length}
        <div>
            <ScoreReport report = {report}/>
        </div>
        
        </> 
        
        
        
        
        
        : <>

            {inputState ? <div>

                <div style={{ fontSize: "10vw" }}>
                    {shuffled[current].jp_kana}
                </div>

                {inputState === "multi" ?
                    (selected.length > 0 && answers.length > 0 ?
                        <>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", height: "250px", margin: "auto" }}>
                                <div style={{ border: "solid 1px white" }}>
                                    <Answer kana={answers[0]} current={current} setCurrent={setCurrent} answer={answer} score={score} setScore={setScore} report = {report} setReport={setReport}/>
                                    <Answer kana={answers[1]} current={current} setCurrent={setCurrent} answer={answer} score={score} setScore={setScore} report = {report} setReport={setReport}/>
                                </div>
                                <div style={{ border: "solid 1px white" }}>
                                    <Answer kana={answers[2]} current={current} setCurrent={setCurrent} answer={answer} score={score} setScore={setScore} report = {report} setReport={setReport}/>
                                    <Answer kana={answers[3]} current={current} setCurrent={setCurrent} answer={answer} score={score} setScore={setScore} report = {report} setReport={setReport}/>
                                </div>
                            </div>
                        </> : <>Loading</>)
                    : inputState === "direct" ?
                        <>
                            <input type="text" placeholder="Enter your answer here..." ref={inputRef} />
                            <button onClick={(e ) => inputHandler(e)}>Submit</button>
                        </>
                        : <>Something Broke:/</>}
                

            </div>


                : <>
                <div style={{display:"flex",justifyContent:"center", alignItems:"center",height:"30vh"}}>
                    <button onClick={() => setInputState("multi")} style={{width:"10vw",height:"15vh"}}>
                    <AiOutlineSelect size={70}/><br></br>
                        Multiple Choice
                    </button>

                    <button onClick={() => setInputState("direct")} style={{width:"10vw", height:"15vh"}}>
                    <BsInputCursorText size={70}/><br></br>
                        Direct Input</button>
                        </div>
                </>
            }



        </>}

    </>)

}