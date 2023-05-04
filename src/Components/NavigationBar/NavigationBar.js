import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./NavigationBar.module.css";
import Image from "../../asset/logo.png";
import { Link } from "react-scroll";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <Link
          className={style.opt}
          activeClass="active"
          to="/"
          spy={true}
        >
          <h5>Home</h5>
        </Link>
        <Link className={style.opt} activeClass="active" to="Blog" spy={true}>
          <h5>Gallery</h5>
        </Link>
        <h5 className={style.opt} onClick={navigatePagetoPhoto}>
          Photo
        </h5>
        <h5 className={style.opt} onClick={navigatePage}>
          Registartion
        </h5>
        <h5 className={style.opt} onClick={navigatePagetocontact}>
          Contact
        </h5>
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
