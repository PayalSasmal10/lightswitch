import React, { createContext, useState } from "react";

const ThemeContextAPI = createContext();

const DarkProvider = (props) => {
  const [dark, setDark] = useState(false);

  const themeToggle = () => {
    setDark(!dark);
  };
  return (
    <ThemeContextAPI.Provider value={{dark, themeToggle}}>
        {props.children}
    </ThemeContextAPI.Provider>
  );
};

export {ThemeContextAPI, DarkProvider};


