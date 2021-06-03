import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type PropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: PropsType) {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
            {/*<button onClick={ () => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/*<button onClick={() => {*/}
            {/*    !collapsed ? setCollapsed(true) : setCollapsed(false)*/}
            {/*}}>TOGGLE*/}
            {/*</button>*/}
            {!state.collapsed ? <AccordionBody/> : ''}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

