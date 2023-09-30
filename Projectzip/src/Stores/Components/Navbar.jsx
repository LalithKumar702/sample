import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'
// import CustomButton from './CustomButton'



const Navbar = () => {
  return (
    <>
    <div className='navSection'>
        <div className='title'>
            <h2>Pharmacy-Store</h2>
        </div>
        <div className='search'>
            <input type='text' placeholder='search...'/> </div>
            <div className='user'>
              <Link to='/Login'>
                <div className='user-detail'>Login/SignUP</div>
                </Link> 
                
                </div>
           <Link to='/cart'>
            <div className="cart">Cart</div>
            </Link>
           
            
            
        </div>
      
    
    <div className="submenu">
      <ul>
        <Link to='/mask'><li>Sanitizer and masks</li></Link>
        <Link to='/medicines'><li>Medicines</li></Link>
        
        
        <li>Helathdrinks & Nutrients</li>
        <li>Personal care & Beauty</li>
        <li>Ayurvedic & Herbal</li>
        <li>Orthopedics</li>
        <li>Mother and Baby</li>
      </ul>
    </div>
    </>
    
  )
}

export default Navbar
