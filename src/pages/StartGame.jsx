import { useContext } from "react"
import { SelectedContext } from "../App"

export default function StartGame() {
    const [selected, setSelected] = useContext(SelectedContext);
    console.log(selected)
    setSelected(selected.sort(() => Math.random() - 0.5))
    console.log(selected)




    return (<>
        {selected.map((item) => 
        {return <>
        <h1>{item[0].jp_kana}</h1><br/></>})
}
    
    
    </>)
}