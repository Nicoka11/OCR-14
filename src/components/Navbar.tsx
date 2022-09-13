import { StaticRoutes } from "@src/constants";
import { styled } from "@src/styles";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavLink = styled(Link, {
  color: "$slate12",
  textDecoration: "none",
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const Navbar = () => (
  <header>
    <Flex>
      <NavLink to={StaticRoutes.Home}>Home</NavLink>
      <NavLink to={StaticRoutes.Employees}>Employees</NavLink>
      <ThemeSwitch />
    </Flex>
  </header>
);

export default Navbar;
