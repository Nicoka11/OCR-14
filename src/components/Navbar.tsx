import { StaticRoutes } from "@src/constants";
import { styled } from "@src/styles";
import { Link } from "react-router-dom";
import { Container } from "./BaseElements";
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
  width: "$full",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "$12",
  marginTop:"$6"
});

const Navbar = () => (
  <Container>
    <Header>
      <Flex>
        <NavLink to={StaticRoutes.Home}>Home</NavLink>
        <NavLink to={StaticRoutes.Employees}>Employees</NavLink>
      </Flex>
      <ThemeSwitch />
    </Header>
  </Container>
);

export default Navbar;
