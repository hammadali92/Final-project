import React,{useState} from 'react'
import './BoysGirlsCard.css'
const BoysGirlsCard = () => {
    const BGCard =[{
        "id": "1",
        "image": "https://www.junaidjamshed.com/media/wysiwyg/dd7.jpg",
         "title":"Teen Girls"
    },
    {
        "id": "2",
        "image": "https://www.junaidjamshed.com/media/wysiwyg/dd8.jpg",
         "title":"Teen Boys"
    },
    {
        "id": "3",
        "image": "https://www.junaidjamshed.com/media/wysiwyg/dd9.jpg",
         "title":"Kids Girl"
    },
    {
        "id": "4",
        "image": "https://www.junaidjamshed.com/media/wysiwyg/dd10.jpg",
         "title":"Kids Boys"
    }]

let [data,setdata]=useState( BGCard)
  return (
    <div>
      <div className='text-center mt-5'>
        <p>NEW ARRIVALS</p>
        <h1 className='fw-bold fs-1'>Boys & Girls</h1>
        </div>
          
       <div className="container d-flex flex-wrap justify-content-between gap-2 mt-5">
      {  data.map((item) => {
            return(
                <div className="card border border-0" style={{width: "16rem"}}>
                <img src={item.image} class="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title  fs-2">{item.title} </h5>
                 <a href="">Shop Now</a>
                 
                </div>
              </div>
            )
        })}
                                  
      </div>
          <div className='text-center'>
          
            <span className=" fw-bold  fs-5">NEW COLLECTION</span> 
            <span className=" ">DRESS BRIGHT AND LIVLY</span> 
             <span class="fw-bold  fs-5">WITH J. YOUNGSTERS COLLECTION</span>
          </div>
    </div>
  )
}

export default BoysGirlsCard
