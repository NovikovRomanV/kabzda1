import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"

export const Clock = () => {
    const clock = () => {
        const time = new Date();
        const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
        const timeClock = [time]

        // return timeClock.map(tc => <div>{hours}:{minutes}:{seconds}</div>)

        return <div className={s.clock}>
            {hours} : {minutes} : {seconds}
        </div>

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