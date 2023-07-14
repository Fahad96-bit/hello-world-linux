import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/data')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;

