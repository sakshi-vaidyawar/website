import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const MidPage = () => {
  return (
    <div>
      <div>
      <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/featured/beautiful-house-x1yu28g8twzle26l.jpg"
          alt="First slide" style={{height:"500px"}}
        />
        <Carousel.Caption  style={{textAlign:"start",fontSize:"50px"}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button style={{backgroundColor:"greenyellow",color:"white",fontSize:"30px",border:"none"}}>View Project</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg"
          alt="Second slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption style={{textAlign:"start",fontSize:"50px"}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button style={{backgroundColor:"greenyellow",color:"white",fontSize:"30px",border:"none"}}>View Project</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg"
          alt="Third slide"
          style={{height:"500px"}}
        />

        <Carousel.Caption  style={{textAlign:"justify",fontSize:"50px"}}>
          <h3 >Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button style={{backgroundColor:"greenyellow",color:"white",fontSize:"30px",border:"none"}}>View Project</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}

export default MidPage;
