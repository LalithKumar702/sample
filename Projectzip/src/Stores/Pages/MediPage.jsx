import React from 'react'
import { MediData } from '../data/Medi'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MediPage = () => {
  return (
    <>
    <Navbar/>
       <div className='pageSection'>
        {MediData.map((item)=>{
            return(
                <div>
                    <Link to={`/medicines/${item.id}`}><div className='pageImg'>
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

export default MediPage
