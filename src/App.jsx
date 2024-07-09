import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './contexts/ThemeContext'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './style.css'

function App() {
  const [isDark,setisDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

  return (
    <>
      <ThemeContext.Provider value={[isDark,setisDark]}>
      <Header/>
      <Outlet/>
     
    </ThemeContext.Provider>
    </>
  )
}

export default App
