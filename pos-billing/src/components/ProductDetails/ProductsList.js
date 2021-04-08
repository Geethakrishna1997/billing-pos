import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem'

export default function ProductsList(props){ 
    const { products } = props
    
   return (
        <Grid container >
            <Grid item >
                <Typography variant="h4" style={{color:"green"}}>My Products - {products.length}</Typography>
            </Grid>

            <Grid item >
                <Typography>
                {products.map(prod =>{
                    return <ProductItem 
                            key={prod._id}
                            {...prod} 
                        />                      
                })}
                </Typography>
            </Grid>
        </Grid>
    )
}