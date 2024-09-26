// import React, { useState,useCallback,useEffect } from 'react'

// const PasswordGenerate = () => {
//   const [length,setLength] = useState(8)
//   const [number, setNumber] = useState(false)
//   const [charector, setcharector] = useState(false)
//   const [ , setPassword] = useState("")

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(number) str += "0123456789"
//     if(charector) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)      
//     }

//     pass += str.charAt(char)

//     setPassword(pass) 

//   }, [length, number, charector, setPassword])

// //here if i un comment this it will display nothing 
// useEffect(() => {
//   passwordGenerator()
// }, [length, number, char, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
//       <h1 className='text-white text-center mb-4'>Password Generator</h1>
//       <div className='flex shadow rounded-md overflow-hidden mb-4'>
//         <input type="text"
//         // value={Password}
//         className='outline-none w-full py-1 px-3'
//         placeholder='Password'
//         readOnly
//         />
//         <button className='outline-none bg-yellow-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
//       </div>
//       <div className='flex text-sm gap-x-2 text-white'>
//         <div className='flex items-center gap-x-1' >
//           <input 
//           type="range" 
//           min={6}
//           max={40}
//           value={length}
//           className='curser-pointer' 
//           onChange={(e)=> setLength(e.target.value)}
//           />
//           <label> Length : {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input 
//           type="checkbox"
//           defaultChecked={number}
//           id="numberInput"
//           onChange={() => {
//               setNumber((prev) => !prev);
//           }}/>
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charector}
//               id="characterInput"
//               onChange={() => {
//                   setChar((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default PasswordGenerate;


import React, { useState, useCallback, useEffect,useRef } from 'react';

const PasswordGenerate = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700">
      <h1 className='text-white text-center mb-4'>Password Generator</h1>
      <div className='flex shadow rounded-md overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-yellow-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 text-white'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={40}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label> Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            id="numberInput"
            onChange={() => setNumber(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={character}
            id="characterInput"
            onChange={() => setCharacter(prev => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerate;
