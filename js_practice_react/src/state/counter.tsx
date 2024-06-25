import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }

    return <div>
        <h3>Counter</h3>
        <div>{count}</div>
        <button style={{backgroundColor: count > 10 ? "red" : "green"}} onClick={increment}>+1</button>
    </div>
}