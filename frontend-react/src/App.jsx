import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  const API_URL = import.meta.env.VITE_BACKEND_BASE_URL

  useEffect(()=> {
    axios.get(`${API_URL}/testMessageView/`).then((response)=> {setMessage(response.data.message)})
  }, [])

  return (
    <div>
      {message && <div>{message}</div>}
    </div>
  )
}

export default App
