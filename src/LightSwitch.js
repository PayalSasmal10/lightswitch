import { useContext } from "react";
import { ThemeContextAPI } from "./ThemeContextAPI";

export const LightSwitch = () => {
  const { dark, themeToggle } = useContext(ThemeContextAPI);

  const toggleHandler = () => {
    themeToggle();
  }

  return (
    <div className="Lightswitch">
      <img
        src={dark ? `../img/lightswitch-off.png` : `../img/lightswitch-on.png`}
        alt="Lightswitch"
        onClick={toggleHandler}
      />
    </div>
  );
};
