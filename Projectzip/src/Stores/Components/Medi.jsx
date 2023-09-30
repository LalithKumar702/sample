import React from 'react'
import { MediData } from '../data/Medi'

const Medi = () => {
  return (
   
    <>
    <h3>Medicines</h3>
    <div className='proSection'>
    {
        MediData.map((item)=>{
            return(
                <div className='imageBox'>
                    <img className='proImage' src={item.image} alt=''/>
                </div>
            )

        })
    }
  
</div>
    </>
   
  )
}

export default Medi
