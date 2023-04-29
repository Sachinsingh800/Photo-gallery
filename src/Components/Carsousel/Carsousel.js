import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Carsousel.module.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://images.alphacoders.com/648/648163.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://www.picturecorrect.com/wp-content/uploads/2019/09/self-portrait-near-waterfall.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://drscdn.500px.org/photo/57326650/m%3D900/v2?sig=f48e38639bff23e2cafdc448ac8f198e96bf5af8c4bdb27c80b68d292415fd59"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;