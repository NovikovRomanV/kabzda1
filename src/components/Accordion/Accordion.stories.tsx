import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: "components/Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            },
        },
        onClick: {
           ...GetCategoryObj('Events')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        titleValue: {
            ...GetCategoryObj('Main')
        },
        collapsed: {
            ...GetCategoryObj('Main')
        },
        items: {
            ...GetCategoryObj('Main')
        },
    },
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")
const callbacks = {onChange: callback,  onClick:onClickCallback}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const UserCollapsedMode = Template.bind({});
UserCollapsedMode.args = {
    ...callbacks,
    titleValue: "User",
    collapsed: true,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ],
}

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    ...callbacks,
    titleValue: "Menu",
    collapsed: false,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {

    let [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} />
}

ModeChanging.args = {
    titleValue: "User",
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4},
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}
