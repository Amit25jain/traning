import React from 'react';
import './css/App.css';
import Footer from './Footer';
import Header from './Header';
import {  Redirect, Switch, Route,Link } from "react-router-dom";
import Home from './Home';
import About from './pages/About';
import Service from './pages/Service';
import Carrer from './pages/Carrer';
import Contact from './pages/Contact';
import Useraccount from './pages/Useraccount';
import Onlinet from './pages/Onlinet';
import Traningc from './pages/Traningc';
import Admin from './pages/Admin';
import Video from './pages/Video';
import Picture from './pages/Picture';

import Html from './pages/subject/Html';
import Css from './pages/subject/Css';
import Bootstrap from './pages/subject/Bootstrap';
import Javascript from './pages/subject/Javascript';
import Jquery from './pages/subject/Jquery';
import Php from './pages/subject/Php';
import Reactss from './pages/subject/Reactss';
import Dotnet from './pages/subject/Dotnet';
import Team from './pages/Team';
import Address from './pages/Address';
import './css/All.css';
import * as FaIcons from 'react-icons/fa';

function App() {
  return (
    <>
    
<div className="icon-bar">
  <Link to="#" className="facebook"><FaIcons.FaFacebook /></Link> 
  <Link to="#" className="twitter"><FaIcons.FaTwitter /></Link> 
  <Link to="#" className="google"><FaIcons.FaGoogle /></Link> 
  <Link to="#" className="linkedin"><FaIcons.FaLinkedin /></Link>
  <Link to="#" className="youtube"><FaIcons.FaYoutube /></Link> 
  <Link to="#" className="whatsapp"><FaIcons.FaWhatsapp /></Link>
  <Link to="#" className="instagram"><FaIcons.FaInstagram /></Link>
  
</div>

   <Header />
   <Switch> 
        <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
         <Route path='/service' exact component={Service} />
         <Route path='/carrer' exact component={Carrer} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/useraccount' exact component={Useraccount} />
        <Route path='/traningc' exact component={Traningc} />
        <Route path='/onlinet' exact component={Onlinet} />
        <Route path='/admin' exact component={Admin} />
        <Route path='/video' exact component={Video} />
        <Route path='/picture' exact component={Picture} />
        <Route path='/html' exact component={Html} />
        <Route path='/css' exact component={Css} />
        <Route path='/bootstrap' exact component={Bootstrap} />
        <Route path='/javascript' exact component={Javascript} />
        <Route path='/jquery' exact component={Jquery} />
        <Route path='/php' exact component={Php} />
        <Route path='/react' exact component={Reactss} />
        <Route path='/dotnet' exact component={Dotnet} />
        <Route path='/team' exact component={Team} />
        <Route path='/address' exact component={Address} />
  
        <Redirect to="/" />
  </Switch>
  <Footer />
    </>
  );
}

export default App;
