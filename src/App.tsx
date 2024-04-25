import { useState } from 'react'
import './App.css'
import Header from "./components/header/header";

function App() {
  const [on3d, setOn3d] = useState(false)

  return (
    <div id={'container'}>
        <Header />
    </div>
  )
}

export default App
