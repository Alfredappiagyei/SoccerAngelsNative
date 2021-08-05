
import './App.css';
import React, { useEffect } from "react";
import galaryimage22 from "./photos/galaryimage22.jpg";
import galaryimage15 from "./photos/galaryimage15.jpg";
import galaryimage16 from "./photos/galaryimage16.jpg";
import galaryimage17 from "./photos/galaryimage17.jpg";
import adet11 from "./photos/adet11.JPG";
import adet10 from "./photos/adet10.JPG";
import adet25 from "./photos/adet25.jpg";
import galaryimage18 from "./photos/galaryimage18.jpg";
import adet23 from "./photos/adet23.jpg";
import galaryimage19 from "./photos/galaryimage19.jpg";
import galaryimage20 from "./photos/galaryimage20.jpg";
import galaryimage21 from "./photos/galaryimage21.jpg";
import galaryimage5 from "./photos/galaryimage5.jpg";
import galaryimage6 from "./photos/galaryimage6.jpg";
import galaryimage7 from "./photos/galaryimage7.JPG";
import galaryimage8 from "./photos/galaryimage8.jpg";
import adet14 from "./photos/adet14.JPG";
import galaryimage10 from "./photos/galaryimage10.jpg";
// import $ from "jquery";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import "./soccer/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, []);

  return (
    <div className="App">
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
               <Link class="navbar-brand" to="/" >SAFA</Link>
             </div>
{/* 
              <!-- Collect the nav links, forms, and other content for toggling -->  */}
             <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul class="nav navbar-nav navbar-right">
                 <li>  <a href="#" class="js--scroll-to-about">About</a></li>
                 <li> <a href="#" class="js--scroll-to-gallery">Gallery</a></li>
                 <li>  <a href="#" class="js--scroll-to-contacts">Contacts</a></li>
                 <li> <a href="#" class="js--scroll-to-sponsors">Sponsors</a></li>
               </ul>
             </div>
           </div>
         </nav>
         </div>
       </div>
      




      {/* <!-- CAROUSEL --> */}
        <div class="container-fluid">
        <div class="row">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
          
            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner" role="listbox">
              <div class="item active" id="item1">
                <div class="carousel-caption caption">
                  <h1 data-aos="fade-up">UNITED FOR ALL</h1>
                  <p data-aos="flip-up">
                    Soccer Angels academy uses the power in soccer to connect young people with the 
                    mentors, information, and educational services they need to thrive.                  
                </p>
                </div>
              </div>
              
              <div class="item" id="item3">
                <div class="carousel-caption caption">
                  <h1>YOUTH IS A TIME OF PROMISE</h1>
                  <p>
                    Each of us knows of a child who gained self esteem, learned sportsmanship, or became a more productive
                    person because of their involvement in soccer. 
                </p>
                </div>
              </div>
              <div class="item" id="item4">
                <div class="carousel-caption caption" >
                  <h1>IT'S EVERYONE'S GAME</h1>
                  <p>
                    We believe in teamwork-discover more about our people and our organisation, along 
                    with our latest news and resources.
                </p>
                </div>
              </div>     
            </div>
          
            {/* <!-- Controls --> */}
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        </div>


 



{/* 
  <!-- MOVEMENT --> */}


<section class="container-fluid movement" >       
    <div data-aos="fade-up">
     <p style={{fontSize:"40px", fontFamily:"open sans,sans-serif"}}>JOIN SOCCER ANGELS</p>
     <h2 style={{fontSize:"50px", fontFamily:"open sans,sans-serif"}}><strong>ACADEMY</strong></h2>
     <h3 style={{fontSize:"40px", fontFamily:"open sans,sans-serif"}}><strong>IGNITED BY SOCCER</strong></h3>
     <h1 style={{fontSize:"50px", fontFamily:"open sans,sans-serif"}}><strong>TO BRIDGE</strong></h1>
     <p style={{fontSize:"30px", fontFamily:"open sans,sans-serif"}}>THE ADOLECENT <strong>EDUCATION </strong>GAP. </p>
   </div>
      <div className="js--wp-2 " data-aos="fade-up">
      <p style={{color:"black", fontSize:"20px", marginTop:"-10px",fontFamily:"open sans,sans-serif", lineHeight:"38px"}}>
          We are committed to helping young people embrace an active and productive lifestyle using
          soccer to cultivate critical life skills that pave the path to a better future.
      </p> 
    </div>  
 </section>








{/* <!-- ABOUT --> */}


<section  class="about">
  <div class="container">
 <h2 style={{color:"#ffffff"}}>About Soccer Angels Academy</h2>
    <div class="row">
      <div class="col-md-6" style={{color:"#ffffff"}}> 
        <p>
           Soccer Angels Academy is an independent soccer and cognitive development charity.
           The academy is held by guarantee with qualified soccer instructors and allied
           educators to nurturing identified raw soccer talents within it operative environs
           and beyond to becoming skillful and fully-fledged professionals, in order to integrate
           into the global soccer economy.
       </p>
       <p>
          Soccer Angels Academy was formed by two soccer loving fans namely Emmanuel Akonkoh
          and -- who is an Electrician and --- respectively. The foundation started in the year 2015 but was duly 
          registered in the year 2018. The foundation's mission is to help mitigate talent abuse, streetism
          and unproductive peer circles abuse and extinction, and our vision is to become a world class
          educational and soccer academy.
       </p>
       <p>
         Since it's formation we have participated in number of tournaments
         within the municipality and all we did so well. Education being a core part of the foundation we
         make time to visit our players in their various schools to interact  with their teachers to know 
         how they are performing.
         The foundation has teams ranging from under 10,13,15,17 and womens team all together numbering over 80
         kids/players
       </p>
      </div>
      <div class="col-md-6"   id="aboutimage">
       <img src={galaryimage22} class="img-responsive" alt="gallery"/>
      </div>
  </div>
 </div>
 </section>



{/* <!-- GALLERY --> */}

<section  class="container-fluid gallerysection">
<h2>Featured Gallery</h2>
<div class="row" id="gallery">
<a class="example-image-link" href={galaryimage22} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage22} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage15} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage15} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage16} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage16} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage17} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage17} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={adet11} data-lightbox="example-set">
 <img  width="250" height="200" src={adet11} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={adet10} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={adet10} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={adet25} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={adet25} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage18} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage18} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={adet23} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={adet23} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage19} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage19} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage20} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage20} alt="BrianAdetBrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage21} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage21} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage5} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage5} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage6} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage6} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage7} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage19} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage8} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage8} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={adet14} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={adet14} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={galaryimage10} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={galaryimage10} alt="BrianAdet"/>
</a>
</div>
{/* 
<!-- more button section --> */}
<div class="contaner-fluid more_gallery">
<a href="Gallery.html"><i class="fa fa-long-arrow-right  js--wp-2"></i></a> 
</div>
</section>



{/* 
<!-- CONTACTS --> */}



         <section  class="contaner-fluid contacts">       
         <div class="row">
          <div class="col-md-6" id="contactimage">
            <img src={galaryimage7} class="img-responsive" />
           </div>
            
               <div class="col-md-6"   style={{padding:"0px 5px 0px 10px", color:"#ffffff"}}>
                <h2  style={{ marginBottom:"70px",fontFamily:"open sans,sans-serif", color:"#ffffff"}}>Contact Us</h2>
                <span ><i class="fa fa-home"></i> Location: La Wireless Park, La Dedekotopon Municipality</span>
                <span ><i class="fa fa-envelope-square"></i> P.O.Box os 0847, Osu-Accra</span> 

               <span ><i class="fa fa-phone"></i> +233 545447738 / +233 244893390</span>
               <a href="mailto:brianadetsoccer@yahoo.com? subject=hello%20everyone%20" ><span ><i class="fa fa-envelope"></i> brianadetsoccer@yahoo.com</span></a> 
               <a href="mailto:brainadetsoccer@gmail.com? subject=hello%20everyone%20"><span ><i class="fa fa-envelope"></i>  brianadetsoccer@gmail.com</span></a>  
               <a class="btn btn-default massage js--wp-4"  href="https://docs.google.com/forms/d/1EKl9S5zHIai7tvmkRlIVjbeeTDP2KMaJ-Ss0HwmapVw/edit" role="button">send us a message</a>
             
         </div>     
       </div>
      </section>

 
      

      <footer>
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-md-6 col-xs-12">
                <h4> &copy; 2021 The Soccer Angels Academy, All rightes rserved</h4>
                <h4>Developed and maintained by the SAFA Technology and Transformation team</h4>
              </div>

              <div class="col-md-6 col-xs-12">
                <span><a ><i className="fab fa-youtube"></i> </a></span> 
                <span><a ><i className="fab fa-twitter"></i> </a></span> 
                <span><a href="https://web.facebook.com/brianadetsoccerfoundation/photos/?ref=page_internal"><i class="fab fa-facebook"></i></a></span> 
                <span><a ><i className="fab fa-instagram"></i></a></span>  
              </div>
            </div>         
          </div> 
        </footer>
    </div>
  );
}

export default App;
