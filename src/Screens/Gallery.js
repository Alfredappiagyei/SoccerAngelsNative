import React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// IMAGES -----------------------------------------------------------
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


function Gallery() {
  return (

    <div className="Gallery">
                 <div>
                    <Navbar />
                </div>


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

              <div>   
                 <Footer />
              </div>

    </div>
  );
}

export default Gallery;
