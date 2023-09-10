
import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className='full-screen'>
      <div className='center-content'>
       <div><img  style={{ height: '18vh' }} src='https://www.junaidjamshed.com/media/email/logo/stores/1/logo.png' alt='' />
            </div>
            <div>
              <select id='landing-currency' className='select' name='landing-currency'>
                <option value='PKR'>Pakistan</option>
                <option value='AUD'>Australia</option>
                <option value='NZD'>New Zealand</option>
                <option value='GBP'>United Kingdom</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='ZA'>South Africa</option>
                <option value='USD'>Rest of the World</option>
              </select>
            </div>
            <div> 
             <Link  to="MainPage"><button className='button'>Enter</button></Link> 
            </div>
         
      
      </div>
    </div>
  );
}

export default FrontPage;

