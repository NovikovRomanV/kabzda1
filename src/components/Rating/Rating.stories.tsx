import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import Rating, {RatingValueType} from "./Rating";


export default {
    title: "Rating stories",
    component: Rating
};

const callback = action("change stars");

export const EmptyRating = () => <Rating value={ 0 } onClick={ callback } />
export const Rating1 = () => <Rating value={ 1 } onClick={ callback } />
export const Rating2 = () => <Rating value={ 2 } onClick={ callback } />
export const Rating3 = () => <Rating value={ 3 } onClick={ callback } />
export const Rating4 = () => <Rating value={ 4 } onClick={ callback } />
export const Rating5 = () => <Rating value={ 5 } onClick={ callback } />

export const ChangeRating = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue} />
}

