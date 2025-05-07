

import React, { useEffect } from 'react'



function App() {

  useEffect(()=>{
    const process=fetch('https://testingcorss.netlify.app/api/testing-cors-background', {
      
  method: 'POST',
  headers: { 
    "Access-Control-Allow-Origin": "*", // Allow all origins for now
    "Access-Control-Allow-Headers": "Content-Type, Origin, Accept",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",

  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
//     fetch('https://testingcorss.netlify.app/.netlify/functions/testing-cors-background', {
//   method: 'POST',
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));
  },[])
  return (
    <>
    <div>

    testing
    </div>
    
    </>
  )
}

export default App