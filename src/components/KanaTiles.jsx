import { useLocation } from "react-router-dom";
import { useRef,useContext } from "react";
import { SelectedContext } from "../App";


export default function KanaTiles(props) {

    const [selected, setSelected] = useContext(SelectedContext);

    const path = useLocation().pathname; //used for conditional rendering
    const checkRef = useRef(null);

    function checkHandler(){ //used to check direct input
        if(!checkRef.current.checked){
            console.log("Is false")
            setSelected(selected.filter((item) => item != props.row))
        }else{
            console.log("Is true")
            setSelected([...selected,props.row])
        }
    }
    return (

        <>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2vw", display:"flex",alignItems:"center" }}>
                    {/* checkbox only included when in certain pages */}
                    {path === "/selection" ? <input ref = {checkRef} onChange={checkHandler} type="checkbox" name="" id="" /> : <></>}

                </div>

                <div style={{ fontSize: "20pt", display: "flex", justifyContent: "space-between", width: "60vw" }}>


{/* maping over row to make character chart */}
                    {props.row.map((item) => { 
                        return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "7vw", height: "8vh" }}>
                            <div style={{ backgroundColor: "gray", width: "5vw", height: "7vh", margin:"auto", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                                <div style={{fontSize: "25pt"}}>
                                {item.jp_kana}
                                </div>
                                <div style={{fontSize:"12pt"}}>
                                {item.en_romaji}
                                </div>

                            </div>

                        </div>

                    })}
                </div>
            </div>

        </>
    )

}