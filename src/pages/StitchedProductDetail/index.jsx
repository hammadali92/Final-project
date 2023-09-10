import React,{useState} from 'react'

import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import StitchedData from '../../data/StitchedData'
import Navbar from '../../components/Navbar'
import BeTheFirst from '../../components/BeTheFirst'
import Footer from '../../components/Footer'
import ReactStars from 'react-rating-stars-component';

const StitchedProductDetail = () => {
  const {id} = useParams();
  const data = StitchedData.find(p => p.id === Number(id));

  const [parentImageSrc, setParentImageSrc] = useState(data.image);

  const handleChildImageClick = (childImageSrc) => {
    setParentImageSrc(childImageSrc);
  };
  return (
    <div>
      <Navbar/>
      {/* product detail  */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6">
            <div className='d-flex flex-column' >
              <div><img src={parentImageSrc} alt="" style = {{height:"70vh", width:"80%"}} /></div>
             <div className="child-img d-flex flex-wrap gap-3 mt-2 ">
              <img src={data.image1} onClick={() => handleChildImageClick(data.image1)} style = {{height:"18vh", width:"18%"}} alt="" />
              <img src={data.image2} onClick={() => handleChildImageClick(data.image2)} alt="" style = {{height:"18vh", width:"18%"}}/>
              <img src={data.image3} onClick={() => handleChildImageClick(data.image3)} alt="" style = {{height:"18vh", width:"18%"}}/>
              <img src={data.image4} onClick={() => handleChildImageClick(data.image4)} alt="" style = {{height:"18vh", width:"18%"}} />
             </div>
            </div>
            </div>
          <div className="col-lg-6 mt-3">
        <div>  <h3 className="card-title ">{data.title} </h3></div>
        <div> <p className='fw-bold text-secondary mt-1'>SKU#: {data.SKU}</p></div>
          <div><span className=' fw-bold text-dark-emphasis'>IN STOCK</span></div>
          <div><Link to="" className='text-dark '><em>Be the first to review this product</em></Link></div>
          <div><h3 class="card-text fw-bold mt-1">{data.price}</h3></div>
          <hr />
          <div className='d-flex '>
  <div><button type="button" class="btn btn-dark " style={{height:"7vh",width: "200px"}}>ADD TO BAG</button></div>
  <div><i class="fa-regular fa-heart fs-4 mx-5 mt-2" style={{ border:"2px solid black",borderRadius:"50px" ,padding:"3px"}}></i></div>
</div>
   {/* Basic  */}
   <div>
    <h5 className='mt-3'><em>{data.basic}</em></h5>
  <div><span>{data.basic1}</span></div>
  <div><span>{data.basic2}</span></div>
  <div><span>{data.basic3}</span></div>
  <div><span>{data.basic4}</span></div>
   </div>
   <hr />

  {/* information  */}
  <div class="dropdown " >
  <span className="d-flex justify-content-between fw-bold fs-5"   data-bs-toggle="dropdown" > More Information <i className="fa-solid fa-angle-down "></i></span>
   <ul class="dropdown-menu h-auto w-auto  p-3 w-md-auto" style={{fontSize:"14px"}} >
    <div className='d-flex '><strong style={{width:"25%"}}>Size</strong>
     <span>{data.size}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Color</strong>
    <span>{data.color}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Product Category</strong>
    <span>{data.ProductCategory}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Collection</strong>
    <span>{data.collection}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Design</strong>
    <span>{data.design}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Fabric</strong>
    <span>{data.fabric}</span></div>
    <div  className='d-flex '><strong style={{width:"25%"}}>Disclaimer</strong>
    <span className='mx-5'>{data.Disclaimer}</span></div>
    
   </ul>
  </div>
  <hr />

  {/* Reviews  */}
  <div class="dropdown " >
  <span className="d-flex justify-content-between fw-bold fs-5"   data-bs-toggle="dropdown" >Reviews<i className="fa-solid fa-angle-down "></i></span>
   <ul class="dropdown-menu h-auto w-auto  p-3 w-md-auto" style={{fontSize:"14px"}} >
      <p>You're reviewing:</p>
      <div><h6 className="card-title ">{data.title} </h6></div>
      <div className='mt-2 fw-bold'><span>Your Rating</span></div>
      <div><span className='fw-bold'>Quality:</span></div>
      <ReactStars
count={data?.rating?.rate}
size={24}
activeColor = "yellow"
/>

{/* form review  */}
<form class="">
  <div class="">
    <label for="" class="form-label">Nickname</label>
    <input type="text" class="form-control" id=""/>
  </div>
  <div class="">
    <label for="" class="form-label">Summary</label>
    <input type="text" class="form-control" id=""/>
  </div>
  <div class="">
    <label for="" class="form-label">Review</label>
    <input type="text" class="form-control" id=""/>
  </div>
  
<div class="mt-4">
    <button type="submit" class="btn btn-dark">Submit Review</button>
  </div>
</form>

   </ul>
  </div>
  <hr />
          </div>
        </div>
      </div>
     <BeTheFirst/>
     <Footer/>
    </div>
  )
}

export default StitchedProductDetail



