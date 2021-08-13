import React from "react";
import { Link } from "react-router-dom";
function Navbar() {

  return (   
        <div class="container-fluid">
        <div class="row">
         <nav class="navbar navbar-default navbar-home ">
           <div class="container-fluid">
              {/* <!-- Brand and toggle get grouped for better mobile display -->  */}
             <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span class="sr-only">Toggle navigation</span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
               </button>
               <Link to="/" ><p  class="navbar-brand">SAFA</p></Link>
             </div>
{/* 
              <!-- Collect the nav links, forms, and other content for toggling -->  */}
             <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                 <li>  <Link to="#" class="js--scroll-to-about">About</Link></li>
                 <li> <Link to="#" class="js--scroll-to-gallery">Gallery</Link></li>
                 <li>  <Link to="/contacts" class="js--scroll-to-contacts">Contacts</Link></li>
                 <li> <Link to="#" class="js--scroll-to-sponsors">Sponsors</Link></li>
               </ul>
             </div>
           </div>
         </nav>
         </div>
       </div>
  );
}

export default Navbar;
