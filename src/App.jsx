import { createContext, useState } from 'react'

const themeContext = createContext()

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
    </div>
  )
}

export default App