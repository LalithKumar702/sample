import React from 'react'
import { HNData } from '../data/HN'

const HN = () => {
  return (
    <div className='proSection'>
        {
            HNData.map((item)=>{
                return(
                    <div className='imageBox'>
                        <img className='proImage' src={item.image} alt=''/>
                    </div>
                )

            })
        }
      
    </div>
  )
}

export default HN