import React, {useState} from "react";
import s from './OnOff.module.css'

type PropsType = {

    onChange: (on: boolean) => void
}

export const UnControlledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(true);

    const boxStyle = {
        marginTop: "15px",
        marginBottom: "15px",
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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={boxStyle}>
            <span style={onStyle} onClick={ onClicked }>On</span>
            <span style={offStyle} onClick={ offClicked }>Off</span>
            <span style={lightbulbStyle}></span>
        </div>
        // <div className={s.box}>
        //     <span className={`${s.on_off} ${props.on ? s.green : ''}`} >On</span>
        //     <span className={`${s.on_off} ${!props.on ? s.red : ''}`} >Off</span>
        //     <span className={`${s.lightbulb} ${props.on ? s.lightbulb_green : s.lightbulb_red}`}></span>
        // </div>
    )
}

