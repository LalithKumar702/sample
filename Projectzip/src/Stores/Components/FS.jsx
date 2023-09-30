import React from 'react'
import { FSData } from '../data/FS'
import { alignProperty } from '@mui/material/styles/cssUtils'

const FS = () => {
  return (
    <>
    <h3>Santizers and Masks</h3>
    <div className='proSection'>
        {
            FSData.map((item)=>{
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

export default FS
