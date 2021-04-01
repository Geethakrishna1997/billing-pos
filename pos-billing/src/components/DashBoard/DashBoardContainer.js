import React from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RecentBills from './RecentBills'
import PieChart from './PieChart'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme)=>({
    container : {
        height : "50vh",
        width : "50vw",
        padding : 10,
        display : "flex",
        alignItems : "flex-start",
        justifyContent : "space-evenly"
    },
    mybox : {
        width : 30,
        backgroundColor : theme.palette.success.main,
        color : "white",
        padding : 100,
        borderRadius : 4,
        boxShadow : "0px 10px 10px rgba(0,0,0,0.1)"
    }
}))

export default function DashboardContainer(){
    const classes=useStyles()

    const customersData=useSelector((state)=>{
        return state.customers
    })

    const productsData=useSelector((state)=>{
        return state.products
    })

    const billsData=useSelector((state)=>{
        return state.bills
    })

    return  (
            <Container>
                <Grid>
                    <Box container className={classes.container}>
                        <Box className={classes.mybox}>
                            <Typography varient='h3' ><b>Customers</b></Typography>
                            <Typography varient='subtitle1'>{customersData.length}</Typography>
                        </Box>
                                        
                        <Box className={classes.mybox}>
                            <Typography varient='h3' ><b>Products</b></Typography>
                            <Typography varient='subtitle1'>{productsData.length}</Typography>
                        </Box>

                        <Box className={classes.mybox}>
                            <Typography varient='h3' ><b>Bills</b></Typography>
                            <Typography varient='subtitle1'>{billsData.length}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container directions = "row">
                    <Grid xs={12} sm={6}>
                        <Typography><RecentBills /></Typography>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Typography><PieChart 
                                customers={customersData}
                                products={productsData}
                                bills={billsData}
                            /></Typography>
                    </Grid>
                </Grid>
            </Container>
    )
}