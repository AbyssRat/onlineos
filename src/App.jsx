import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  //Készíts egy alkalmazást, amelynek a közepén megjelenik, hogy az oldal online vagy offline 

  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const url = 'https://www.w3schools.com/jsref/prop_nav_online.asp'

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <>
      <div className="app">
        <h1>az oldalas {isOnline ? 'Online' : 'Offline'}</h1>
      </div>
    
    </>
  )
}

export default App
