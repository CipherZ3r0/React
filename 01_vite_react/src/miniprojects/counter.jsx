import { useState } from "react";



function Counter () {


    let [Counter , setCounter ] = useState(10)


    // let counter = 10;

    const addValue = () => {
        console.log("value added"  , Math.random());
        Counter = Counter + 1
        setCounter(Counter)
    }

    const sub_value = () => {
        Counter = Counter - 1
        setCounter(Counter)
    }

    return(

        <>
        <h1>Counter app</h1>
        <h3>Counter: {Counter}</h3>

        <button onClick={addValue}>Add</button>
        <button onClick={sub_value}>substrection</button>
        </>
    )
}

export default Counter;