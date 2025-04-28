// import { use, useRef, useState,useMemo } from 'react'


// function App() {
// //   const inputElem=useRef()
// // const getval =()=>{
// //   console.log(inputElem.current.value)
// // }

// const [number,setNumber]=useState(0)
// const [counter,setCounter]=useState(0)

// const cubeNumber=(num)=>{
// console.log("value is calculated")
// return Math.pow(num,3)


// }
// const result =useMemo(()=>cubeNumber(number),[number])
//   return (
//     <>
//     <input type="number" value={number} onChange={(e)=>(setNumber(e.target.value))}  />
//     <h1>cube is {result}</h1>
//     <button onClick={()=>setCounter(counter+1)}>counter ++</button>
//     <h1>counter value {counter}</h1>
// {/* <input type="text" ref={inputElem} />
// <button onClick={getval}>click me</button> */}
//     </>
//   )
// }

// export default App


// import React, { useState, useRef, useMemo } from 'react';

// function App() {
//   const [number, setNumber] = useState(0);
//   const renderCount = useRef(0);

//   const squaredNumber = useMemo(() => {
//     console.log('Calculating square...');
//     return number * number;
//   }, [number]);

//   renderCount.current++; // Track renders without causing re-renders

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <p>Number: {number}</p>
//       <p>Squared Number: {squaredNumber}</p>
//       <p>Renders: {renderCount.current}</p>
//     </div>
//   );
// }
// export default App

import React, { useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Home from './components/Home'
// import Projects from './components/Projects'
// import About from './components/About'

function App() {

  useEffect(()=>{
    fetch('https://testingcorss.netlify.app/.netlify/functions/testing-cors', {
  method: 'POST',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  },[])
  return (
    <>
    <div>

    testing
    </div>
    
    </>
//     <div>
// <BrowserRouter>
// <Routes>
//   <Route path='/' Component={Home} />
//   <Route path='/projects' Component={Projects} />
//   <Route path='/about' Component={About} />
// </Routes>
// </BrowserRouter>

//     </div>
  )
}

export default App