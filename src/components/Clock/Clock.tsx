import React, {useEffect, useState} from "react";

export const Clock = () => {
    const clock = () => {
        const time = new Date();
        const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

        return <>
            {hours} : {minutes} : {seconds}
        </>

    }
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(clock, 1000)
        setInterval(() => setCount(state => state + 1), 1000)
    }, [])

    return <>
        {clock()}
    </>
}