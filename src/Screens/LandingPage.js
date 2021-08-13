
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "../soccer/css/bootstrap.min.css";
// import $ from "jquery";
// import { Link } from "react-router-dom";

// IMAGES -----------------------------------------------------------
import logo from "../soccer/photos/logo.jpeg";
import soccer27 from "../soccer/photos/soccer27.jpg";
import soccer1 from "../soccer/photos/soccer1.jpg";
import soccer2 from "../soccer/photos/soccer2.jpg";
import soccer3 from "../soccer/photos/soccer3.jpg";
import soccer4 from "../soccer/photos/soccer4.jpg";
import soccer5 from "../soccer/photos/soccer5.jpg";
import soccer6 from "../soccer/photos/soccer6.jpg";
import soccer7 from "../soccer/photos/soccer7.jpg";
import soccer8 from "../soccer/photos/soccer8.jpg";
import soccer9 from "../soccer/photos/soccer9.jpg";
import soccer10 from "../soccer/photos/soccer10.jpg";
import soccer11 from "../soccer/photos/soccer11.jpg";
import soccer12 from "../soccer/photos/soccer12.jpg";
import soccer13 from "../soccer/photos/soccer13.jpg";
import soccer14 from "../soccer/photos/soccer14.jpg";
import soccer15 from "../soccer/photos/soccer15.jpg";
import soccer16 from "../soccer/photos/soccer16.jpg";
import soccer17 from "../soccer/photos/soccer17.jpg";
import soccer18 from "../soccer/photos/soccer18.jpg";
import soccer19 from "../soccer/photos/soccer19.jpg";

// COMPONENTS --------------------------------------------------
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
}, []);

  return (
    <div className="App">
        <div>
        <Navbar />
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
              
              <div class="item" id="item2">
                <div class="carousel-caption caption">
                  <h1>YOUTH IS A TIME OF PROMISE</h1>
                  <p>
                    Each of us knows of a child who gained self esteem, learned sportsmanship, or became a more productive
                    person because of their involvement in soccer. 
                </p>
                </div>
              </div>
              <div class="item" id="item3">
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
       <img src={soccer27} class="img-responsive" alt="gallery"/>
      </div>
  </div>
 </div>
 </section>



{/* <!-- GALLERY --> */}

<section  class="container-fluid gallerysection">
<h2>Featured Gallery</h2>
<div class="row" id="gallery">
<a class="example-image-link" href={soccer27} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer27} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer1} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer1} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={ soccer2} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={ soccer2} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer3} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer3} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer4} data-lightbox="example-set">
 <img  width="250" height="200" src={soccer4} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer5} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer5} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer6} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer6} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer7} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer7} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer8} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer8} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer9} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer9} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer10} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer10} alt="BrianAdetBrianAdet"/>
</a>
<a class="example-image-link" href={soccer11} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer11} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer12} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer12} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer13} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer13} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer14} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer14} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer15} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer15} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer16} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer16} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer17} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer17} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer18} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer18} alt="BrianAdet"/>
</a>
<a class="example-image-link" href={soccer19} data-lightbox="example-set">
 <img class="dp" width="250" height="200" src={soccer19} alt="BrianAdet"/>
</a>
</div>
 
</section>



{/* 
<!-- CONTACTS --> */}


         <section  class="contaner-fluid contacts">       
         <div class="row">
          <div class="col-md-6" id="contactimage">
            <img src={logo} alt="contactimage" class="img-responsive" />
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

 
      

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
