import { darkTheme, styled } from "@src/styles";
import { useAtom } from "jotai";
import { toggleDarkThemeAtom } from "@src/store/atoms";
import "@src/styles/reset.css";
import ThemeSwitch from "./components/ThemeSwitch";

const AppWrapper = styled("div", {
  background: "$slate1",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "$2",
  transition: "$default",
});

function App() {
  const [isDarkTheme] = useAtom(toggleDarkThemeAtom);
  const theme = isDarkTheme ? darkTheme : "";
  return (
    <AppWrapper className={theme}>
      <ThemeSwitch />
    </AppWrapper>
  );
}

export default App;
