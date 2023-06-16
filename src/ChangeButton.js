import { useContext } from "react";
import { ThemeContextAPI } from "./ThemeContextAPI";
import { LightSwitch } from "./LightSwitch";

export const ChangeButton = () => {
  const {dark} = useContext(ThemeContextAPI);
 
  return (
      <div className={dark ? `container dark` : `container light`}>
        <LightSwitch/>
      </div>
  );
};
