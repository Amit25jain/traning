import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, 
  MDBNavbarToggler, MDBCollapse} from "mdbreact";
import {Link} from 'react-router-dom';
import './css/App.css';
import Sidebar from './Sidebar';
import Logo from './images/favicon.ico'
import * as FaIcons from 'react-icons/fa';

class Header extends React.Component
{
  

  render()
  {
   
    return(
      <>
     

      <MDBNavbar  dark expand="md" style={{backgroundColor:'black'}}>
        <MDBNavbarBrand className="white-text">
          <Sidebar /> 
        </MDBNavbarBrand>
        <img src={Logo} alt="description of image" aria-hidden="true" className="App-logo"/>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav  left className="text-light font-weight-bold font-italic text-uppercase">
           
            Smart Traning Course
            
          </MDBNavbarNav>
         
          <MDBNavbarNav right className="font-weight-bold text-uppercase ">
            <MDBNavItem className="">
              <MDBNavLink to="/" className="h">  Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="">
              <MDBNavLink to="/about" className="h"> About us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="">
              <MDBNavLink to="/service" className="h"> Service</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="">
              <MDBNavLink to="/carrer" className="h"> Carrer</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="">
              <MDBNavLink to="/contact" className="h"> Contact us</MDBNavLink>
            </MDBNavItem>
    <div class="dropdown">
  <Link style={{backgroundColor:'black',color:'white',fontWeight:'bold'}} className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Traning Course
  </Link>
  <div className="dropdown-menu r" aria-labelledby="dropdownMenuButton">
 <Link to="/video" className="dropdown-item text-decoration-none font-weight-bold">Traning video</Link>
  <Link to="/picture" className="dropdown-item text-decoration-none font-weight-bold">Traning Picture</Link>
  <Link className="dropdown-item  text-decoration-none font-weight-bold ">
  <ul className="navbar-nav ">
  <li className="nav-item dropdown ">
        <Link className="nav-link dropdown-toggle" to="http://localhost:3000" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Traning Subject
        </Link>
        <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
       
          <li className="dropdown-submenu"> Subject
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/html">HTML</Link></li>
              <li><Link className="dropdown-item" to="/css">CSS</Link></li>
              <li><Link className="dropdown-item" to="/bootstrap">BOOTSTRAP</Link></li>
              <li><Link className="dropdown-item" to="/javascript">JAVASCRIPT</Link></li>
              <li><Link className="dropdown-item" to="/jquery">JQUERY</Link></li>
              <li><Link className="dropdown-item" to="/php">PHP</Link></li>
              <li><Link className="dropdown-item" to="/react">REACT JS</Link></li>
              <li><Link className="dropdown-item" to="/dotnet">DOT NET</Link></li>
              {/* <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">Submenu 1</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>
                  <li><a className="dropdown-item" href="#">Subsubmenu1</a></li>
                </ul>
              </li> */}
             
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    </Link>
  </div>
</div>
          
            <div class="dropdown">
  <Link style={{backgroundColor:'black',color:'white',fontWeight:'bold'}}  className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   User Traning
  </Link>
  <div className="dropdown-menu r" aria-labelledby="dropdownMenuButton">
  <Link to="/useraccount" className="dropdown-item text-decoration-none font-weight-bold"> Login Account</Link>
  <Link to="/admin" className="dropdown-item text-decoration-none font-weight-bold"> Admin Panel</Link>
  </div>
</div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

     <div className="container bg-white" >
   
     <h6 className="font-weight-bold font-italic "><b> (<FaIcons.FaMobileAlt className="mobile"/> 7418529635) </b>Smart Traning Course yes It will Course Online and Offline Lecture On user Depend not force Please New welcome to smart traning Course Join it
   <b> ( <FaIcons.FaMobileAlt className="mobile"/> 7894561235) </b> </h6>

  

     </div>

</>
    );
  }
}


export default Header;