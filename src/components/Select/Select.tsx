import React, {useState} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]

}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItem = () => {
        setActive(!active)
    }

    return <div>
        <span className={s.selectTitle} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
        {active && <div className={s.items}>{props.items.map(i =>
            <div onClick={() => {
                props.onChange(i.value); toggleItem()
            }} key={i.value}>{i.title}</div>)}</div>}
    </div>
}