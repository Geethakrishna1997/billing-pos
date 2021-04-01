import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function Home(){

    return (
        <Grid container >
            <Grid item >
                <Typography variant="h3">Home </Typography>
            </Grid>
            <Grid item >
                <Typography variant="subtitle1">
                    POS Stands for point of sale,
                    A POS billing system, or commonly known as a Retail POS Software is a billing software for retail stores to manage the store. It generates invoices, accepts payments, manages stock, inventory, and the customer database.
                </Typography>
                <Typography variant="h5">What is a POS Billing System?</Typography>
                <Typography variant="subtitle1" >
                Visiting a retail outlet, one can see the cashier using a system at the cash counter. It scans barcodes, accepts payments, and generate bills. This system is the answer to the question of what is a POS Billing System.  

                Earlier the retail stores used a cash register to track the sales. With the time and evolution of technology, the traditional cash registers were replaced by digital POS solutions.

                A POS billing system, or commonly known as a Retail POS Software is a billing software for retail stores to manage the store. It generates invoices, accepts payments, manages stock, inventory, and the customer database. Retail POS software not only helps in managing sales but also in tracking the progress of the business.

                Retail POS Software is a software application that needs to be used on hardware. A computer set-up plays a good host for a POS Billing system, but there also are specific POS terminals that are used for the sole purpose of billing. These POS terminals are touch-enabled, dual-sided display, with an integrated cash drawer, printer, and barcode scanner. However, modern POS terminals are very compact and flexible in nature.
                </Typography>
            </Grid>
        </Grid>
    )
}