import React from 'react'
import {Container, Grid} from '@material-ui/core'
import Chart from "react-google-charts"


export default function PieChart({customers, products, bills}){
 
    // console.log(customers,products,bills)

    return (
        <Container>
            <Grid item xm ={6}>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Title', 'activity'],
                        ['Customers', customers.length],
                        ['Products', products.length],
                        ['bills',bills.length],
                    ]}
                    options={{
                        title: 'Bills site Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                </Grid>
        </Container>
    )
}