import { useState } from 'react'
import './App.css'

import FileInput from "./components/FileInput"


function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <div>
      </div>
      <h1>.psd artboards to css</h1>
      <FileInput></FileInput>
    </>
  )
}

export default App
