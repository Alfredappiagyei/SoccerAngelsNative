 
import React, { Component } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <div>
                    <Navbar />
                </div>
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                                <h1 className="contactUs">
                                    <b>Contact Us</b>
                                </h1>
                           
                            
                            <div className="row">
                               <p>- On this page</p> 
                                <p>Fan Service contact information</p>
                            </div>
                           
                            <div className="row">
                                <p>
                                    <h3>Fans Services contact information</h3>
                                </p>
                                

                                <p>
                                    Need help with <b style={{ color: "lawngreen" }}>ticketing</b>
                                    , SAFA Oficial Membership, 
                                    SAFA TV , or have a general feedback about you
                                    <b style={{ color: "lawngreen" }}>SAFA</b>
                                    <b style={{ color: "lawngreen" }}>Experience</b>? Here are the
                                    ways you can find an answer or get in touch:
                                </p>
                              
                                <hr/>
                                <p>
                                    <b>Call Us</b>
                                </p>
                              
                                <p>
                                    For all Enquiries{" "}
                                    <a
                                        href="tel:+233240311729"
                                        style={{ textDecoration: "none", color: "lawngreen" }}
                                    >
                        
                                        +233 240311729{" "}
                                    </a>
                                    /{" "}
                                    <a
                                        href="tel:+233547908886"
                                        style={{ textDecoration: "none", color: "lawngreen" }}
                                    >
                                        {" "}
                                        +233 240311729{" "}
                                    </a>
                                </p>
                                <br />
                                <hr/>
                                <p>
                                    <b>Email Us</b>
                                </p>
                                
                                <span >
                                    <i className="fa fa-envelope"></i>
                                    <a
                                        href="mailto:soccerangelsa67@gmail.com? "
                                        style={{ textDecoration: "none", color: "lawngreen", }}
                                    >
                                      
                                        soccerangelsa67@gmail.com
                                    </a>
                                </span>
                                <br />
                                <span >
                                    <i className="fa fa-envelope"></i>
                                    <a
                                        href="mailto:soccerangels@gmail.com? "
                                        style={{ textDecoration: "none", color: "lawngreen" }}
                                    >
                                        {" "}
                                        soccerangels@gmail.com
                                    </a>
                                </span>
                                <hr/>

                                <p>
                                    <b>Tweet Us</b>
                                </p>
                                
                                <p>
                                   
                                    We're now on Tweeter to help you with your queastions. You can
                                    find us{" "}
                                    <a
                                        href="https://twitter.com/SoccerAngelAca1"
                                        style={{ textDecoration: "none", color: "lawngreen" }}
                                    >
                                        @SAFA
                                    </a> 
                                </p>
                                <hr/>
                                <p>
                                    <b>Team address</b>
                                </p>
                                <p>Assin Fosu(CENTRAL REGION)</p>
                             
                                <p>Soccer Angels Footbal Academy</p>
                            
                                <p>Dompim</p>
                      
                            </div>
                            <hr />
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="row">
                                <h3>Get in touch with us</h3>
                                <form
                                    action="https://getform.io/f/275659fa-c96e-4145-8b25-ce4ebcb0fe6d"
                                    method="POST"
                                >
                                    <div>
                                    <label>Your Name</label>
                                    <input type="text" name="name" />
                                    </div>

                                   <div>
                                   <label>Email</label>
                                    <input type="email" name="email" required="true" />
                                   </div>
                                    
                                    <div>
                                    <label>Message</label>
                                    <textarea type="text" name="message" />
                                    </div>  
                                    <button type="submit">Send</button>
                                </form>
                            </div>

                            <div className="row"></div>
                        </div>
                    </div>
                </div>
                
                <div>
                 <Footer />
              </div>

 
            </div>

            
        );
    }
}
export default Contacts;
