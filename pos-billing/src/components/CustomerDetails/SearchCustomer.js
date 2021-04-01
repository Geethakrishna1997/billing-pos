import React from 'react'

export default function SearchCustomer(props){
    const { term,handleChange} = props

    return (
        <div>
            <input 
                type='text'
                value={term}
                onChange={handleChange}
                placeholder='search customer'
            />
        </div>
    )
}