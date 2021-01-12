import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import Rating, {RatingPropsType, RatingValueType} from "./Rating";
import {Story} from "@storybook/react/types-6-0";


export default {
    title: "components/Rating stories",
    component: Rating
};

const callback = action("change stars");

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
    onClick: callback,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
    onClick: callback,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
    onClick: callback,
}

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
    onClick: callback,
}

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4,
    onClick: callback,
}

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
    onClick: callback,
}

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue} />
}


