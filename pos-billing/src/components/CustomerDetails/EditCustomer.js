import React from 'react'
import CustomerForm from './CustomerForm'

export default function EditProduct( props ){
    const { id, name, mobile, email, handleToggle} = props


    return (
        <div>
            <CustomerForm 
                id={id}
                name={name}
                mobile={mobile} 
                email={email}
                handleToggle={handleToggle} 
            />
        </div>
    )
}