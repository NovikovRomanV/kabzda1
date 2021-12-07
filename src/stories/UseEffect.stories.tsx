import React, {useEffect, useState} from "react";

export const Set = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");

    useEffect(()=>{
        console.log("useEffect every render");
        document.title = counter.toString();
    })
    useEffect(()=>{
        console.log("userEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])
    useEffect(()=>{
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, counter: {counter} fake: {fake}
        <button onClick={()=>{setCounter(counter + 1)}}>counter +</button>
        <button onClick={()=>{setFake(fake + 1)}}>fake +</button>
    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        debugger
        setInterval(() => {
            setCounter(state=>state+1)
        }, 1000)
    }, [])
    return <>
        counter: {counter}
    </>
}