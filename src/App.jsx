import {Main} from './compountes/main'
import './App.css'
import { useState } from 'react'
import PlayGame from './compountes/PlayGame'

function App() {
  const [countStart,setcountStart]=useState(false)

  const togglemood = () =>{
   setcountStart((prev) => !prev)
  }


  return (
    <>
       { countStart ?  <PlayGame/> : <Main toggle = {togglemood}/>  }
       
    </>
  )
}

export default App
