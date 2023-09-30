import React from 'react'
import { FSData } from '../data/FS'
import Navbar from '../Components/Navbar'
import {Link} from 'react-router-dom'

const FSPage = () => {
  return (
    <>
    <Navbar/>
       <div className='pageSection'>
        {FSData.map((item)=>{
            return(
                <div>
                    <Link to={`/masks/${item.id}`}>
                    <div className='pageImg'>
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>
                    
                    <div className="proModel">
                        {item.product},{item.price}
                    </div>
                </div>
                    

            )
        })}
      
    </div>
    </>
 
  )
}

export default FSPage
