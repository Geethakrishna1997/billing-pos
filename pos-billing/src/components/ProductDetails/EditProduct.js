import React from 'react'
import ProductForm from './ProductForm'

export default function EditProduct( props ){
    const { id, name, price, handleToggle} = props

    // const handleSubmit=(formData)=>{
    //     dispatch(startGetEdit(id,formData))
    //     handleToggle()
    // }

    return (
        <div>
            <ProductForm 
                id={id}
                name={name}
                price={price} 
                handleToggle={handleToggle} 
                // handleSubmit={handleSubmit}
            />
        </div>
    )
}