import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './KurtiCard.css'
import KurtiCategory from '../../data/KurtiCategory'
import KurtiData from '../../data/KurtiData'

const KurtiCard = () => {
    let [data,setdata]=useState(KurtiData)
    let [categorydata,setcategorydata]=useState(KurtiCategory)
  return (
    <div>
    {/* <!-- Categiry and  filter  --> */}
  <div className='d-flex justify-content-between '>
    <div className=''><h5 className='mt-3 mx-2'>Shopping Options</h5></div>
    <div class="filter d-flex align-items-center justify-content-end">
  <p class="mx-2 mt-3 "><b>Sort By</b></p>
  <select class="select-filter border border-bottom w-50 w-md-auto mx-3" style={{fontSize:"14px"}} name="" id="">
    <option value="" >Featured</option>
    <option value="">New In</option>
    <option value="">Price : Low To High</option>
    <option value="">Price : High To Low</option>
    </select>
</div>
  </div>
{/* <!-- filter end  --> */}

{/* category section  */}
<div className="  d-flex flex-wrap justify-content-between  mt-1">
<div class="category-section  mx-3 ">
{  categorydata.map((item) => {
          return(
<div class="dropdown " >
  <hr />
  <span className="d-flex justify-content-between"   data-bs-toggle="dropdown" > {item.category}<i className="fa-solid fa-angle-down "></i></span>
   <ul class="dropdown-menu w-auto  w-md-auto" style={{fontSize:"14px"}} >
    <div><a class="dropdown-item" href="#"><input type="radio" /> {item.categorydata1}</a></div>
    <div><a class="dropdown-item" href="#"><input type="radio" /> {item.categorydata2} </a></div>
    <div><a class="dropdown-item" href="#"><input type="radio" /> {item.categorydata3}</a></div>
    <div><a class="dropdown-item" href="#"><input type="radio" /> {item.categorydata4}</a></div>
    <div><a class="dropdown-item" href="#"><input type="radio" /> {item.categorydata5}</a></div>
   </ul>
  </div>
   )
})}
</div>
{/* Category Section End  */}


{/* Card Section  */}
<div className='card-section d-flex flex-wrap justify-content-around  '>

{  data.map((item) => {
    return(
    
        <div className=" card border-0 gap-4 " style={{width: "17rem"} }>
       <Link to={`${item.id}`}><img src={item.image} class="card-img-top" alt="..."/></Link> 
        <div className="card-body">
          <p className="card-title ">{item.title} </p>
          <h6 class="card-text fw-bold text-danger">{item.price}</h6>
          <Link to={`${item.id}`}><button type="button" class="btn btn-outline-dark">SHOP NOW</button></Link>
        </div>
      </div>
      
    )
})}</div>

</div>
</div>
    
  )
}

export default KurtiCard
