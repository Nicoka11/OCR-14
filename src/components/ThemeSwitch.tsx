import { DarkThemeIcon, LightThemeIcon } from "@src/icons/Theme";
import { toggleDarkThemeAtom } from "@src/atomic/atoms";
import { useAtom } from "jotai";
import { ButtonGhost } from "./Buttons";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useAtom(toggleDarkThemeAtom);
  const icon = isDarkTheme ? <LightThemeIcon /> : <DarkThemeIcon />;

  function onClickHandler(): void {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ButtonGhost
      onClick={onClickHandler}
      css={{
        height: "$8",
        width: "$8",
        overflow: "hidden",
        padding: "$0",
        transform: `rotate(${isDarkTheme ? "90" : "0"}deg)`,
        transition: "$default",
      }}
    >
      {icon}
    </ButtonGhost>
  );
};

export default ThemeSwitch;
