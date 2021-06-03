import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "components/Select",
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {title: "Minsk", value: "1"},
                       {title: "Moscow", value: "2"},
                       {title: "Kiev", value: "3"}
                   ]}
    />

}

export const WithoutValue = () => {
    return <Select onChange={action("Value change")}
                   items={[
                       {title: "Minsk", value: "1"},
                       {title: "Moscow", value: "2"},
                       {title: "Kiev", value: "3"}
                   ]}
    />

}