import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import data1 from './images/first.jpg';
import data2 from './images/second.png';
import data3 from './images/third.jpg';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Cards from './Cards';
import Carddata from './Carddata';
import BackgroundSlideshow from 'react-background-slideshow';
import './css/Home.css';
import Contacts from './pages/Contacts';

class Home extends React.Component
{
    render()
    {
        return(
      
            <>
                

            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Slider </h3>
      <Link to="/"><button className="" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>Apply Course Now</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second Slider </h3>
      <Link to="/"><button className="" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>Apply Course Now</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={data3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <Link to="/"><button className="" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>Apply Course Now</button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <Container fluid className="p-2 mb-2 mt-2  text-center">
          <h4  style={{fontFamily:'cursive',fontWeight:'bold'}}>HERE’S HOW WE DO IT!</h4>
          <Row className="ml-0 mr-0">
            <Col ><Cards title={Carddata[0].title} text={Carddata[0].text}/></Col>
            <Col ><Cards title={Carddata[1].title} text={Carddata[1].text}/></Col>
            <Col ><Cards title={Carddata[2].title} text={Carddata[2].text}/></Col>
            <Col ><Cards title={Carddata[3].title} text={Carddata[3].text}/></Col>
          </Row>
        
        </Container>

        <Container fluid className="p-2 mb-2 mt-5  text-center border border-danger p-2">
          
          <Row className="ml-0 mr-0">
            
            <Col sm lg xl> 
            <h4  style={{fontFamily:'cursive',fontWeight:'bold'}}>WELCOME TO Samrt Traning Course</h4>
            <p style={{fontFamily:'cursive',fontWeight:'bold',color:'gray',textAlign:'justify'}}>Our most popular service is our Virtual</p>
            <p style={{fontFamily:'cursive',fontWeight:'bold',color:'gray',textAlign:'justify'}}>Our mission is to effectively solve business problems. We believe in exploring new opportunities that will help your business to grow. We have a team of professionals who provide optimal solutions with high quality and best services at affordable rates. We build customized and verified solutions as per the needs of the clients that are innovative and reliable and provide effective results. Client satisfaction is our topmost priority. 
              We help organizations to fulfill their missions and achieve their desired targets.</p>
            </Col>
            
            <Col sm lg xl>
            <BackgroundSlideshow images={[ data1, data2, data3 ]} />
            </Col>
          
          </Row>
        
        </Container>


{/* contact */}

<Contacts />
            </>
        )
    }
};
export default Home;