import { ReactNode } from "react";
import Navbar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
