

import React, { useEffect } from 'react'



function App() {

  useEffect(()=>{
//     const process=fetch('https://testingcorss.netlify.app/api/testing-cors-background', {
      
//   method: 'POST',
//   headers: { 
//     "Content-Type": "application/json",

//   },
// })
// .then(response => response.json())
// .catch(error => console.error('Error:', error));
    const response=fetch('https://testingcorss.netlify.app/.netlify/functions/testing-cors-background', {
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
  )
}

export default App