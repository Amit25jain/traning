import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
const Footer = () => {
  return (
    <MDBFooter  className="page-footer font-small pt-4 mt-4" style={{backgroundColor:'black'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-light">
              Company Name
            </h5>
            <p className="text-light">
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none bg-light" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-light">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
              <Link to="/carrer">Carrer</Link>
              </li>
              <li>
              <Link to="/address">Address</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none bg-light" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-light">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/video">Traning Video</Link>
              </li>
              <li>
              <Link to="/picture">Traning Picture</Link>
              </li>
              <li>
              <Link to="/service">Service</Link>
              </li>
              <li>
              <Link to="/admin">Admin Panel</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none bg-light" />
         
         
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-light">
              Contact
            </h5>
            <p className="text-light">
             Address :- Govindpuram Ghaziabad

            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
          <Link to="/contact" className="ml-2 btn  btn-rounded" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>
             Contact Now
            </Link>
          </li>
          <li className="list-inline-item">
          <Link to="/carrer" className="ml-2 btn  btn-rounded" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>
              Carrer Job
            </Link>
            <Link to="/traningc" className="ml-2 btn  btn-rounded" style={{backgroundColor:'darkred',color:'white',fontWeight:'bold'}}>
              Traning Course
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <Link className="btn-floating btn-sm btn-fb mx-1">
              <i className="fa fa-facebook-f"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-sm btn-tw mx-1">
              <i className="fa fa-twitter"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fa fa-google-plus"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-sm btn-li mx-1">
              <i className="fa fa-linkedin"> </i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fa fa-dribbble"> </i>
            </Link>
          </li>
        </ul>
      </div>
     
      <div className="footer-copyright text-center py-3" style={{backgroundColor:'darkred'}}>
        <MDBContainer fluid className="text-light">
      <Link to="/" > <FaIcons.FaFacebook style={{float:'left',marginRight:'15px'}}/></Link><Link to="/"><FaIcons.FaTwitter style={{float:'left'}}/></Link>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Tradning Course </a>
          <Link to="/"> <FaIcons.FaInstagram style={{float:'right'}}/></Link><Link to="/"><FaIcons.FaWhatsapp style={{float:'right',marginRight:'15px'}}/></Link>
        </MDBContainer>
      </div>
     
    </MDBFooter>
  );
}

export default Footer;