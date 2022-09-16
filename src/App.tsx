import { darkTheme, styled } from "@src/styles";
import { useAtom } from "jotai";
import { toggleDarkThemeAtom } from "@src/atomic/atoms";
import "@src/styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Layout from "./components/Layout";
import { StaticRoutes } from "./constants";

const AppWrapper = styled("div", {
  background: "$slate1",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "$2",
  transition: "$default",
  color: "$slate12",
  fontFamily: "$montserrat",
});

function App() {
  const [isDarkTheme] = useAtom(toggleDarkThemeAtom);
  const theme = isDarkTheme ? darkTheme : "";
  const root = document.getElementById("root");
  if (root)
    root.style.cssText = `color-scheme: ${isDarkTheme ? "dark" : "light"} `;

  return (
    <AppWrapper className={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path={StaticRoutes.Employees} element={<Employees />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
