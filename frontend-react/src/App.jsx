import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const API_URL = import.meta.env.VITE_BACKEND_API_URL
  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

  useEffect(()=> {
    axios.get(`${API_URL}/testMessageView/`).then((response)=> {setData(response.data), console.log(response.data)})
  }, [])

  console.log(`${BASE_URL}${data.image}`);

  return (
    <div className='page-container'>
      {data &&
      <div className='message-box'>
        <h2>Hiii</h2>
        <p className='message-text'>{data.message}</p>
        <img src={`${BASE_URL}${data.image}`} alt='image' className='message-image' />
      </div>
      }
    </div>
  )
}

export default App
