import React, { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('https://testingcorss.netlify.app/api/testing-cors', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(data => setApiData(data))
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <div>
        testing
        {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
      </div>
    </>
  );
}

export default App;
