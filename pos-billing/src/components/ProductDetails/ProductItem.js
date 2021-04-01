import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startdeleteproduct } from '../../Actions/products'
import EditProduct from './EditProduct'

export default function ProductItem( props ){
    const { _id,name,price,user,createdAt,updatedAt } = props

    const dispatch=useDispatch()
    const [ toggle,setToggle ] = useState(false)

    const removeProduct=(id)=>{
        dispatch(startdeleteproduct(id))
    }

    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditProduct 
                        id={_id}
                        name={name} 
                        price={price}
                        handleToggle={handleToggle} 
                    />
                    <button onClick={handleToggle}>cancel</button>
                </div>
            ) : (
                <blockquote>
                    Product Id : {_id}<br/>
                    Product name : {name}<br/>
                    Product price : {price}<br/>
                    User Id : {user}<br/>
                    Created At : {createdAt}<br/>
                    Updated At : {updatedAt}
                    <button onClick={()=>{removeProduct(_id)}}>DEL</button>
                    <button onClick={handleToggle}>Edit</button>
            </blockquote>
            )}            
        </div>
    )
}