import { useLocation } from "react-router-dom";
import { useRef,useContext } from "react";
import { SelectedContext } from "../App";


export default function KanaTiles(props) {

    const [selected, setSelected] = useContext(SelectedContext);




    const path = useLocation().pathname;
    const checkRef = useRef(null);

    function checkHandler(){
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
                    {path === "/selection" ? <input ref = {checkRef} onChange={checkHandler} type="checkbox" name="" id="" /> : <></>}

                </div>

                <div style={{ fontSize: "20pt", display: "flex", justifyContent: "space-between", width: "60vw" }}>

                    {props.row.map((item) => {
                        return <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "7vw", height: "7vh" }}>
                            <div style={{ backgroundColor: "gray", width: "5vw", height: "6vh", margin:"auto", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                                {item.jp_kana}
                            </div>
                        </div>

                    })}
                </div>
            </div>

        </>
    )

}