import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerForm from '../CustomerDetails/CustomerForm'
import CustomersList from './CustomersList'
import { startGetCustomers } from '../../Actions/customers'
import SearchCustomer from './SearchCustomer'

export default function CustomerContainer(){
    const [term,setTerm] = useState('')

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetCustomers())
    },[dispatch])

    const list=useSelector((state)=>{
        // console.log('list',state.products)
        return state.customers
    })

    const handleChange=(e)=>{
        setTerm(e.target.value)
    }

    const filteredCustomers=()=>{
        const res = list.filter(c=>{
            return c._id.includes(term) || c.name.toLowerCase().includes(term)
        })
        return res
    }

    return (
        <div>
            <h2>My Customers</h2>
            <SearchCustomer term={term} handleChange={handleChange} />
            <CustomerForm />
            <CustomersList list={filteredCustomers()} />
        </div>
    )
}