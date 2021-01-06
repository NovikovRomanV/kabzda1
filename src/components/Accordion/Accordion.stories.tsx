import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: "Accordion",
    component: Accordion
}

export const UserCollapsedMode = () => <Accordion titleValue={"User"} collapsed={true} onClick={action("click")}/>
export const MenuUnCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onClick={action("click")} />

export const ModeChanging = () => {

    let [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"User"} collapsed={value} onClick={() => setValue(!value)} />
}