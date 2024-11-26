import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState(null);
  //axios.defaults.proxy.host = "http://localhost:4000"
  useEffect(() => {
    axios.get('/api/data/', {
      proxy: {
        host: 'localhost',
        port: 4000
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React and Node.js Integration</h1>
      {(data) ? (
        data.map((data) => (
          <div key={data}>
            {data}
          </div>
        ))
      ) : (
        <h3>empty Array</h3>
      )
      }
    </div>
  );
}

export default App;
