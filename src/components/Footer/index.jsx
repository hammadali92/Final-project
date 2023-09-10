import React,{useState} from 'react'
import './Footer.css'
const Footer = () => {
    const [data,setData] = useState([
    {
        heading:"NEED HELP?",
        list1:"+92 21 111 112 111 (9am - 10pm , Mon - Sat)",
        list2: "eshop@junaidjamshed.com" 
    },
    {
        heading:"CUSTOMER SERVICE",
        list1:"Contact Us",
        list2: "Delivery & Orders" ,
        list3:"Returns & Exchanges",
        list4:"Terms & Conditions",
        list5:"Privacy Policy",
        list6:"Track My Order",
        list7:"Payment Guide"
    },
    {
        heading:"COMPANY",
        list1:"About Us",
        list2: "Careers",
        list3:"Store locator",
        list4:"Store Addresses" 
    },
    {
        heading:"FOLLOW US",
        list1:"Facebook",
        list2: "Intagram",
        list3:"Twitter",
        list4: "LinkedIn",
        list5:"Youtube"
        

    }

])
  return (
    <div>
      <div className="container mt-5">
        <div className="row ">
            {data.map((item) => {
                return(
<div className="col-lg-3 col-md-6 col-sm-12">
                <ul className=' d-flex flex-column gap-2 list-unstyled'>
                    <li className='fs-5'><b>{item.heading}</b></li>
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                    <li>{item.list4}</li>
                    <li>{item.list5}</li>
                    <li>{item.list6}</li>
                    <li>{item.list7}</li>
                   
                </ul>
            </div>
                )
            }) }
            
        </div>
        
             {/* <div className="left">
            <i aria-hidden="true" class="fab fa-facebook icons p-2 "></i>
            <i aria-hidden="true" class="fab fa-twitter icons p-2 "></i>
            <i aria-hidden="true" class="fab fa-youtube icons p-2 "></i>
            <i aria-hidden="true" class="fab fa-instagram icons p-2 "></i>
            <i aria-hidden="true" class="fab fa-tiktok icons p-2 "></i>
            <i aria-hidden="true" class="fab fa-linkedin icons p-2 "></i>
            </div> */}
         
      </div>
    </div>
  )
}

export default Footer
