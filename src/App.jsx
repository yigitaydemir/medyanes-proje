import { ThemeContext } from "flowbite-react/lib/esm/components/Flowbite/ThemeContext";
import { createContext, useState } from "react";

const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider>
      <div>
        <Navbar></Navbar>
        <Body></Body>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
