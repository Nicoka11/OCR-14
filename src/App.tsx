import { darkTheme, styled } from "@src/styles";
import { useAtom } from "jotai";
import { toggleDarkThemeAtom } from "@src/store/atoms";
import "@src/styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const AppWrapper = styled("div", {
  background: "$slate1",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "$2",
  transition: "$default",
  color: "$slate12",
  fontFamily: "$montserrat"
});

function App() {
  const [isDarkTheme] = useAtom(toggleDarkThemeAtom);
  const theme = isDarkTheme ? darkTheme : "";
  return (
    <AppWrapper className={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
