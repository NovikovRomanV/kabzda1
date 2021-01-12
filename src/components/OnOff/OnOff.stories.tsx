import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {OnOff, OnOffType} from "./OnOff";
import {Story} from "@storybook/react/types-6-0";


export default {
    title: "components/OnOff",
    component: OnOff
};

const callback = action("change on click")

const Template: Story<OnOffType> = (args) => <OnOff {...args} />

export const OnChange = Template.bind({})
OnChange.args = {
    on: true,
    onClick: callback,
}

export const OffChange = Template.bind({})
OffChange.args = {
    on: false,
    onClick: callback,
}

export const OnOffChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onClick={setValue} />
}


