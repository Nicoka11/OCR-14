import { DarkThemeIcon, LightThemeIcon } from "@src/icons/Theme";
import { toggleDarkThemeAtom } from "@src/atomic/atoms";
import { useAtom } from "jotai";
import { IconButton } from "./Buttons";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(toggleDarkThemeAtom);
  const icon = isDarkTheme ? <LightThemeIcon /> : <DarkThemeIcon />;

  function onClickHandler(): void {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <IconButton
      variant="ghost"
      aria-label="toggle dark theme"
      onClick={onClickHandler}
      css={{
        transform: `rotate(${isDarkTheme ? "90" : "0"}deg)`,
        transition: "$default",
      }}
    >
      {icon}
    </IconButton>
  );
};

export default ThemeSwitch;
