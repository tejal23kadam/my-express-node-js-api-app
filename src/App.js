import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [data, setData] = useState(null);
  const [apidata, apisetData] = useState(null);
  useEffect(() => {
    axios.get('/about', {
      proxy: {
        host: 'localhost',
        port: 4000
      }
    })
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios.get('/api/data', {
      proxy: {
        host: 'localhost',
        port: 4000
      }
    })
      .then(response => {
        apisetData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);






  
  return (
    <>


    
      <div className='container'>
        <div className='pro-container'>
          {(apidata) ?
            (
              (apidata.map((data) => (
                <div className="pro" key={data.id} >
                  <div class="des" >
                    <img src={data.image} alt="noImage" />
                    <h5 className="overme">{data.title} </h5>
                    <div>
                      {
                        (data.discount) ? (
                          <div style={{ display: "flex" }}>
                            <h5><s>{data.price}</s> </h5>
                            <h4>${Math.trunc(data.price - ((data.price * data.discount) / 100))}</h4>
                            <div style={{ display: "flex", paddingTop: "6px" }}>
                              <p class="discount">{data.discount}%</p>
                              <p>off no</p>
                            </div>
                          </div>

                        ) :
                          (
                            <h4>${data.price}</h4>
                          )
                      }
                    </div>
                  </div>
               
                </div>
              )))
            ) :
            (<h1>data is missing</h1>)
          }
        </div>

      </div >

    </>





  );
}

export default App;
