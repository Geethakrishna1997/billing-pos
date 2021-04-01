import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import BillItem from '../BillingDetails/BillItem'

export default function RecentBills(){
    
    const bills=useSelector((state)=>{
        return state.bills
    })
    // console.log('bills_',bills)

    const recentBills=bills.slice(Math.max(bills.length-5,0))   
    // console.log(recentBills)

    return (
        <Container>
            <Grid>
                <Typography variant='h4'>Recent Five Bills</Typography>
                <ul>
                {recentBills.map((bill,i)=>{
                    return <li key={i}>
                            <BillItem {...bill}/>
                        </li> 
                })}
                </ul>
            </Grid>
            
        </Container>
    )
}