import { StaticRoutes } from "@src/constants";
import { styled } from "@src/styles";
import { Link } from "react-router-dom";
import { Box } from "./BaseElements";
import ThemeSwitch from "./ThemeSwitch";

const NavLink = styled(Link, {
  color: "$slate12",
  textDecoration: "none",
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

const Header = styled("header", {
  as: "header",
  width: "$96",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  marginBottom: "$12",
});

const Navbar = () => (
  <Header>
    <Flex>
      <NavLink to={StaticRoutes.Home}>Home</NavLink>
      <NavLink to={StaticRoutes.Employees}>Employees</NavLink>
    </Flex>
    <ThemeSwitch />
  </Header>
);

export default Navbar;
