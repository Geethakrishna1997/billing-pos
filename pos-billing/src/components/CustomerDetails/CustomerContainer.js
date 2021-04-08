import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerForm from '../CustomerDetails/CustomerForm'
import CustomersList from './CustomersList'
import { startGetCustomers } from '../../Actions/customers'
import SearchCustomer from './SearchCustomer'
import { Container, Grid, Typography } from '@material-ui/core'

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
            <Container >
                <Grid xs={12} style={{position: "relative", textAlign: "center"}} >
                    <Typography variant="h3">Customers Catelog</Typography>
                </Grid>
                <Grid container directions = "row">
                    <Grid style={{position: "relative", top: 30}} xs={12} sm={6}>
                        <Typography><CustomersList list={filteredCustomers()} /></Typography>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Grid align="right">
                            <Typography><SearchCustomer term={term} handleChange={handleChange} /></Typography>
                        </Grid>
                        <Grid>
                            <Typography><CustomerForm /></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>            
    )
}