import React, {useState} from "react";
import s from './OnOff.module.css'


export type OnOffType = {
    on: boolean
    /**
     * Callback that is calle when clicked
     * @param setOn is setOn of clicked
     */
    onClick: (setOn: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const boxStyle = {
        marginTop: "15px",
        marginBottom: "15px",
    };
    const onStyle = {
        padding: "10px 10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "green": "white",
    };
    const offStyle = {
        padding: "10px 10px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red",
    };
    const lightbulbStyle = {
        marginLeft: "10px",
        padding: "5px 15px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.on ? "green" : "red"
    };


    return (
        <div style={boxStyle}>
            <span style={onStyle} onClick={ () => {props.onClick(true)} }>On</span>
            <span style={offStyle} onClick={ () => {props.onClick(false)} }>Off</span>
            <span style={lightbulbStyle}></span>
        </div>
        // <div className={s.box}>
        //     <span className={`${s.on_off} ${props.on ? s.green : ''}`} >On</span>
        //     <span className={`${s.on_off} ${!props.on ? s.red : ''}`} >Off</span>
        //     <span className={`${s.lightbulb} ${props.on ? s.lightbulb_green : s.lightbulb_red}`}></span>
        // </div>
    )
}

