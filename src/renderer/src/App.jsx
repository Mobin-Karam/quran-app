import { useState } from 'react'
import Header from './components/Header/Header'
import Logo from './components/Header/Logo/Logo'
import Main from './components/Main/Main'

function App() {
  const [first, setfirst] = useState(0)
  const btn = () => {
    if (first === 0) setfirst(1)
    else {
      setfirst(0)
    }
  }
  console.log(first)
  return (
    <div className="w-full h-auto flex flex-row">
      <Header btn={btn} />
      <Main value1={first} />
    </div>
  )
}

export default App
