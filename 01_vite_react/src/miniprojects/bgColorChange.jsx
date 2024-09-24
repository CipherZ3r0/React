import React from 'react'
import { useState } from 'react'

function BgColorChange() {
    const [color, setcolor] = useState("Yellow")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full'>
                <button 
                onClick={() => setcolor("red")}  //here we pass setcolor like this because onclick takes function as input and we need to pass parameters to setcolor so we can't even write like this onclick={setcolor}
                className='outline-none rounded-full px-4 py-1 shadow-lg'
                style={{backgroundColor: "red"}}>Red</button> 
                <button 
                onClick={() => setcolor("green")}
                className='outline-none rounded-full px-4 py-1 shadow-lg'
                style={{backgroundColor: "green"}}>Green</button> 
                <button
                onClick={() => setcolor("Blueviolet")}
                className='outline-none rounded-full px-4 py-1 shadow-lg'
                style={{backgroundColor: "blueviolet"}}>Blueviolet</button> 
            </div>
        </div>


    </div>
  )
}

export default BgColorChange;
