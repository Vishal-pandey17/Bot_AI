// import { createContext } from 'react'

// export const ThemeContext = createContext('light')

import { createContext } from 'react'
export const ThemeContext = createContext({
    mode: "light",
    setMode: () => {},
  });