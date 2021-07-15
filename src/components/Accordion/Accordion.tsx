import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Element that are showed when is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Color of header text
     */
    color?: string
}

export function AccordionMemo(props: AccordionPropsType) {

   return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            {!props.collapsed  ? <AccordionBody items={props.items} onClick={props.onClick}/> : ''}
        </div>
    )

    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //             <AccordionBody/>
    //         </div>
    //     )
    // }

}

export const Accordion = React.memo(AccordionMemo)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3
            style={{color: props.color ? props.color : "black"}}
            onClick={() => props.onChange()} >{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

