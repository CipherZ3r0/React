import { useState } from "react";



function Counter () {


    let [Counter , setCounter ] = useState(5)


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

        <div className="bg-slate-400 w-full h-screen">

        <h1 className="">Counter app</h1>
        <h3>Counter: {Counter}</h3>

        <button onClick={addValue}>Add</button>
        <button onClick={sub_value}>substrection</button>

        </div>
    )
}

export default Counter;