import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./NavigationBar.module.css"
import Image from "../../asset/logo.png"

function NavigationBar() {
  return (
    <Navbar  className={style.main}>
       <Container className={style.Container}>
        <img className={style.image} src={Image} alt='logo'/>
       </Container>
       <Container className={style.links}>
        <h5>home</h5>
        <h5>About</h5>
        <h5>Blog</h5>
       </Container>
    </Navbar>
  );
}

export default NavigationBar;
