import React, { useEffect, useState } from 'react';

function App() {
  const [backgroundResult, setBackgroundResult] = useState(null); // 👈 Store result here
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://testingcorss.netlify.app/api/testing-cors', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        console.log("✅ Data received:", data);
        if (data.backgroundResult) {
          setBackgroundResult(data.backgroundResult); // 👈 Set background result
        } else {
          setError('No background result received');
        }
      })
      .catch(error => {
        console.error('❌ Error:', error);
        setError('Error calling background function');
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Testing Netlify Background Function</h1>

      {backgroundResult ? (
        <div>
          <h2>Background Result:</h2>
          <pre>{JSON.stringify(backgroundResult, null, 2)}</pre> {/* Pretty print */}
        </div>
      ) : error ? (
        <div style={{ color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      ) : (
        <p>Loading background function...</p>
      )}
    </div>
  );
}

export default App;
