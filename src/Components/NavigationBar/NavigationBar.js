import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./NavigationBar.module.css";
import Image from "../../asset/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


function NavigationBar() {
  const navigate = useNavigate();


  function navigatePage() {
    navigate("/Registration");
  }
  function navigateToHomePage() {
    navigate("/");
  }
  function navigatePagetocontact() {
    navigate("/Contact");
  }
  function navigatePagetoPhoto() {
    navigate("/Photo");
  }
  return (
    <Navbar className={style.main}>
      <Container className={style.Container}>
        <span onClick={navigateToHomePage}>
          <img className={style.image} src={Image} alt="logo" />
          PhotoGallery
        </span>
      </Container>
      <Container className={style.links}>
      <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
          })}
        >
          Home
        </NavLink>
      <NavLink
          to="/Blog"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
          })}
        >
          Gallery
        </NavLink>
      <NavLink
          to="/Photo"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
          })}
        >
          Photo
        </NavLink>
      <NavLink
          to="/Registration"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
          })}
        >
          Registartion
        </NavLink>
      <NavLink
          to="/Contact"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
          })}
        >
          Contact
        </NavLink>
      
      </Container>
      <NavDropdown
        className={style.dropdown}
        title="📸"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default NavigationBar;
