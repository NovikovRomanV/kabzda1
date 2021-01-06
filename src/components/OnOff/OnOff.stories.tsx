import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {OnOff} from "./OnOff";


export default {
    title: "OnOff",
    component: OnOff
};

const callback = action("change on click")

export const OnChange = () => <OnOff on={true} onClick={callback} />
export const OffChange = () => <OnOff on={false} onClick={callback} />

export const OnOffChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onClick={setValue} />
}