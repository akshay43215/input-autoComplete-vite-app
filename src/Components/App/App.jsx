import { useState } from 'react'
import AutoComplete from '../AutoComplete/AutoComplete'
import './App.css'
import {autoCompleteData} from '../../data'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <AutoComplete data={autoCompleteData}/>
    </div>
  )
}

export default App
