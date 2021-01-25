import React from 'react';
import img from '../images/full.jpg';
import '../css/Index.css'
import * as FaIcons from 'react-icons/fa';


class Useraccount extends React.Component {
    render() {
        return(
            <>
             <img src={img} style={{ height: '250px', width: '100%' }} />
             <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>Create From Smart Traning Course</p>
                       
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link bg-dark  active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sign Up</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div style={{borderRadius:'50px'}}  className="tab-pane fade show bg-dark active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading ">Apply Form</h3>
                                <form className="w-100" method="post">
                                <div className="row register-form">
                                    <div className="col-md-12">
                                        
                                      
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" value="" autoFocus/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder=" Password *" value="" />
                                        </div>
                                        <input type="submit" name="submit" className="btnRegister "  value="Login"/>
                                       
                                        <div className="form-group">
                                    <button  style={{background:'linear-gradient(-120deg, #4285F4, #34A853,#FFBC05,#EA4335'}}  className="button float-left"><span><FaIcons.FaGoogle /> </span></button>
                                    <button style={{background:'linear-gradient(120deg, #3B5998, #FFFFFF'}}  className="button float-right"><span><FaIcons.FaFacebook /> </span></button>
                                    </div>
                                    </div>
                                   
                                  
                                </div>
                                </form>
                            </div>
                            <div  style={{borderRadius:'50px'}}  className="bg-dark tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Apply Form</h3>
                                <form className="w-100" method="post">
                                <div className="row register-form">
                                 
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <input type="submit" name="submit" className="btnRegister"  value="Register"/>
                                        <div className="form-group">
                                    <button style={{background:'linear-gradient(-120deg, #4285F4, #34A853,#FFBC05,#EA4335'}}   className="button float-left"><span><FaIcons.FaGoogle /> </span></button>
                                   
                                    </div>
                                    
                                    </div>
                                    <div className="col-md-6">
                                         <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                       
                                        <div className="form-group">
                                   
                                                <button style={{background:'linear-gradient(120deg, #3B5998, #FFFFFF'}}  className="button float-right mt-5"><span><FaIcons.FaFacebook /></span></button>
                                                </div>
                                    </div>
                                
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </>
        )
    }
};
export default Useraccount;