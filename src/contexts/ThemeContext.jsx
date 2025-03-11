import { useContext , createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children})=>{

      const [themeMode, setThemeMode] = useState('light') 
      
      const toggleTheme = ()=>{
        const newTheme = themeMode === 'dark' ? 'light' : 'dark'; 
        setThemeMode(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    }

      useEffect(() => {
         const localTheme = localStorage.getItem('theme') || 'light'
         setThemeMode(localTheme);
         document.body.className = localTheme
      }, [])
      

    return (
        <ThemeContext.Provider value={{themeMode ,toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(ThemeContext)
}   