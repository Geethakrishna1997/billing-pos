import { Grid, List, ListItem, Typography } from '@material-ui/core'
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp'
import React from 'react'

export default function Home(){

    return (
        <Grid container >
            <Grid style={{backgroundImage:'url(https://image.shutterstock.com/z/stock-vector-mobile-phone-with-store-application-receipt-bill-and-various-people-with-shopping-bags-and-gifts-1543643153.jpg)',backgroundSize: 'cover',height:'700px'}}>
            <Grid item  >
                <Typography variant="h3" align='center' style={{color:"mediumpurple"}}>Home </Typography>
            </Grid>
            <Grid item >
                <Typography variant="subtitle1">
                    POS Stands for point of sale,
                    A POS billing system, or commonly known as a Retail POS Software is a billing software for retail 
                    stores to manage the store. It generates invoices or bills to the customer.
                </Typography>
                <Typography variant="h5">Steps to follow for accessing my app</Typography>
                    <List component='ul'>
                        <ListItem><ArrowForwardSharpIcon/> Register to new account.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> Login with registered credentials.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> After login, a dashboard page will appear.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> Add new customers and products in the respective links.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> Create bill for the customers visited.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> Click "bill" link from the bills list to see a particular bill.</ListItem>
                        <ListItem><ArrowForwardSharpIcon/> Click "Print Bill" to print/save the bill.</ListItem> 
                    </List>
            </Grid>
            </Grid>

        </Grid>
    )
}