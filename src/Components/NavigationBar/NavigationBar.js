import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./NavigationBar.module.css";
import Image from "../../asset/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


function NavigationBar() {
  const navigate = useNavigate();


  function navigatePage() {
    navigate("/Registration");
  }
  function navigateToHomePage() {
    navigate("/Home");
  }
  function navigatePageToLogin() {
    navigate("/");
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
      <h6 className={style.opt} onClick={navigateToHomePage}>Home</h6>
      <Link  to="blog" className={style.opt}  >
          <h6>Gallery</h6>  
        </Link>
        <h6 onClick={navigatePagetoPhoto} className={style.opt} >Photo</h6>
        <h6 onClick={navigatePage} className={style.opt} >Registartion</h6>
        <h6 onClick={navigatePageToLogin} className={style.opt} >Login</h6>
      </Container>
      <NavDropdown
        className={style.dropdown}
        title="📸"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
        <NavDropdown.Item href="Photo">Photo</NavDropdown.Item>
        <NavDropdown.Item href="/">Login</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Registration">Registration</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default NavigationBar;
