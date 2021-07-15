import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

type NewMessagesCounterType = {
    count: number
}

const NewMessagesCounter = (props: NewMessagesCounterType) => {
    return <div>{props.count}</div>
}

type UserType = {
    users: Array<string>
}

const UsersSecret = (props: UserType) => {
    console.log("USERS")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dim", "Art", "Svet"])

    const addCount = () => setCounter(counter + 1)
    const addUser = () => setUsers([...users, "Katy" + new Date().getTime()])

    return <>
        <button onClick={addCount}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}