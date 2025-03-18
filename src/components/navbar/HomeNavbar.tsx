import { useNavigate } from "react-router";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar isBordered isBlurred={true}>
      <NavbarContent>
        <NavbarBrand onClick={() => navigate("/")}>
          <p className="font-bold text-inherit">oto-oto</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HomeNavbar;