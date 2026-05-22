import React from 'react'
import Home from './Components/Home'
import Opening from './Components/Opening'
import { useState, useEffect } from 'react'

function App() {

  const [isSplashvisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 7000)
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
    {isSplashvisible && <Opening />}
      <Home />
    </>
  )
}
export default App