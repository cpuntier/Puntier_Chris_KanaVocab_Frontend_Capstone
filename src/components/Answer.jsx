export default function Answer(props){

    return(
        <button onClick={() => props.setCurrent(props.current + 1)}>{props.kana.jp_kana}</button>
        // <>{props.kana.jp_kana}</>
    )
}