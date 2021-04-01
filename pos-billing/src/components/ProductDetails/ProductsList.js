import React, { useState } from 'react'
import ProductItem from './ProductItem'

export default function ProductsList(props){ 
    const { products } = props
    
   return (
        <div>
            <h2>My Products - {products.length}</h2>
            
            <ul>
                {products.map(prod =>{
                    return <li key={prod._id}>
                        <ProductItem 
                            {...prod} 
                            // removeProduct={removeProduct}
                        />
                        
                    </li>
                })}
            </ul>
        </div>
    )
}