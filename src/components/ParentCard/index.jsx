import React from 'react';
import './ParentCard.css'
import { Link } from 'react-router-dom';
const ParentCard = () => {
  return (
    <>
   {/* Women section image */}
   {/* Unstitched */}
   <div className="promo container d-flex flex-wrap justify-content-center "> {/* Center the inner divs */}
        <div className="promo-image-left" style={{ padding: '20px' }}> {/* Add padding */}
          <Link to="/UnstitchedPage"><img src="https://www.junaidjamshed.com/media/wysiwyg/ms001.jpg" style={{ height: "647px", width:"600px" }} alt="" /></Link>
          <div class="title-v2 title-bottom text-center">
            <div class="title-light">Unstitched</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
        </div>

        {/* Kurti */}
        <div className="promo-image-right" style={{ padding: '20px' }}> {/* Add padding */}
          <div className="img">
       <Link to="/KurtiPage"> <img style={{ height: "300px", width: "300px" }} src="https://www.junaidjamshed.com/media/wysiwyg/ms-kurti.jpg" alt="" /></Link>  
          </div>
          <div class="title-v2 title-bottom">
            <div class="title-light">Kurti</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
            
          {/* Stitched */}
          <div className="img">
           <Link to="/StitchedPage"><img style={{ height: "300px", width: "300px" }} src="https://www.junaidjamshed.com/media/wysiwyg/ms-s.jpg" alt="" /></Link> 
          </div>
          <div class="title-v2 title-bottom">
            <div class="title-light">Stitched</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
        </div>
      </div>
{/* men section image */}
      <div className="promo container d-flex flex-wrap justify-content-center "> {/* Center the inner divs */}
      <div className="promo-image-right" style={{ padding: '20px' }}> {/* Add padding */}
          <div className="img">
     <Link to="/KurtaMen">  <img style={{ height: "300px", width: "300px" }} src="https://www.junaidjamshed.com/media/wysiwyg/fs2-152.jpg" alt="" /></Link>     
          </div>
          <div class="title-v2 title-bottom">
            <div class="title-light">Kurta</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
          <div className="img">
        <Link to ="/WaistcoatPage">  <img style={{ height: "300px", width: "300px" }} src="https://www.junaidjamshed.com/media/wysiwyg/fs2-158.jpg" alt="" /></Link>  
          </div>
          <div class="title-v2 title-bottom">
            <div class="title-light">Waistcoat</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
        </div>
        <div className="promo-image-left" style={{ padding: '20px' }}> {/* Add padding */}
          <Link to="/KameezPage"><img src="https://www.junaidjamshed.com/media/wysiwyg/fs2-157.jpg" style={{ height: "647px", width:"600px" }} alt="" /></Link>
          <div class="title-v2 title-bottom text-center">
            <div class="title-light">Kameez Shalwar</div>
            <a href=""><strong>Shop Now</strong></a>
          </div>
        </div>


       
      </div>
{/* Festival coolection  */}

<div class="container festi d-flex justify-content-center align-items-center">
  <img src="https://www.junaidjamshed.com/media/wysiwyg/fs2-191.jpg" class="img-fluid p-5" alt=""/>
</div>
{/* simple comfortable collection  */}
<div class="container festi d-flex justify-content-center align-items-center mt-5">
  <img src="https://www.junaidjamshed.com/media/wysiwyg/Underwear_1.jpg" class="img-fluid p-5" alt=""/>
</div>



    </>
    
      
   
  )
}

export default ParentCard;
