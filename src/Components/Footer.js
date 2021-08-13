import React from "react";
import logo from "../soccer/photos/logo.jpeg";
function Footer() {

  return (   
      <div>
 <footer>
          <div className="container-fluid"> 
          <div className="row footerLogo_row"> 
          <img src={logo} alt="footerlogo" className="img-responsive footer_logo"/>
            </div>       
            <div className="hr"></div>
            <div className="row"> 
            <h5 style={{color:"#ffffff", fontSize:"15px"}}> &copy; 2021 The Soccer Angels Academy, All rightes rserved</h5>
                <h5 style={{color:"#ffffff", fontSize:"15px"}}>Developed and maintained by the SAFA Technology and Transformation team</h5>
            </div>       
               <div className="hr"></div>
           
            <div className="row"> 
            <span><a href="#"><i className="fab fa-youtube"></i> </a></span> 
                <span><a href="#"><i className="fab fa-twitter"></i> </a></span> 
                <span><a href="https://web.facebook.com/brianadetsoccerfoundation/photos/?ref=page_internal"><i class="fab fa-facebook"></i></a></span> 
                <span><a href="#"><i className="fab fa-instagram"></i></a></span>   
            </div>             
              </div>             
        </footer>
      </div>
        
  );
}

export default Footer;
