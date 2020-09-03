import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffType = {
    // on: boolean
}

export const OnOff = (props: OnOffType) => {

    let [on, setOn] = useState(true);

    const boxStyle = {
        marginTop: "15px"
    }

    const onStyle = {
        padding: "10px 10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green": "white",
    };

    const offStyle = {
        padding: "10px 10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red",
    };

    const lightbulbStyle = {
        marginLeft: "10px",
        padding: "5px 15px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red"
    };


    return (
        <div style={boxStyle}>
            <span style={onStyle} onClick={ () => {setOn(true)} }>On</span>
            <span style={offStyle} onClick={() => {setOn(false)} }>Off</span>
            <span style={lightbulbStyle}></span>
        </div>
        // <div className={s.box}>
        //     <span className={`${s.on_off} ${props.on ? s.green : ''}`} >On</span>
        //     <span className={`${s.on_off} ${!props.on ? s.red : ''}`} >Off</span>
        //     <span className={`${s.lightbulb} ${props.on ? s.lightbulb_green : s.lightbulb_red}`}></span>
        // </div>
    )
}

