import React, {useEffect, useState} from "react";
import s from "./Clock.module.css"
import {clearInterval} from "timers";

const getZeroToTime = (number: number) => number < 10 ? "0" + number : number

export const Clock = () => {
    const clock = () => {
        const time = new Date();
        // const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        // const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        // const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
        // const timeClock = [time]

        // return timeClock.map(tc => <div>{hours}:{minutes}:{seconds}</div>)

        return <div className={s.clock}>
            {getZeroToTime(time.getHours())} : {getZeroToTime(time.getMinutes())} : {getZeroToTime(time.getSeconds())}
        </div>

    }
    const [count, setCount] = useState(0)

    useEffect(() => {
        const intervalClockId = setInterval(clock, 1000)
        const intervalState = setInterval(() => setCount(state => state + 1), 1000)
        return () => {
            clearInterval(intervalClockId)
            clearInterval(intervalState)
        }
    }, [])

    return <>
        {clock()}
    </>
}