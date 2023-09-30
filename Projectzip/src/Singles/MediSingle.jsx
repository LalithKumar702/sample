import React from 'react'
import { MediData } from '../Stores/data/Medi'
import { useParams } from 'react-router-dom'
import Navbar from '../Stores/Components/Navbar'

const MediSingle = () => {
    const {id}=useParams()
    const product=MediData.find((item)=>item.id===id)
    console.log(id)
  return (
    <>
    <Navbar/>
    <div className="ind-page">
     <div className="ind-image">
       <img src={product.image}/>
     </div>
     <div className="ind-details">
     <div className="ind-product">
       <h3>{product.product}</h3>
     </div>
     <div className="ind-price">
       <h2>{product.price}</h2>
     </div>
     <div className="ind-cat">
       <p>
         {product.category}
       </p>
       
     </div>
     <button>Add to Cart</button>
     </div>
     
    </div>
    </>
    
    
    
  )
}

export default MediSingle
