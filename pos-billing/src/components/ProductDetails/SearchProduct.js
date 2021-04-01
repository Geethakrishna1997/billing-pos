import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function SearchProduct(props){
    const { term,handleChange } = props

    return (
        <Container>
            <Grid xs={12} style={{position: "relative"}}>
                <Grid>
                    <Typography variant= "h5">Search Product</Typography>
                </Grid>
                <Grid>
                    <input 
                        type='text'
                        value={term}
                        placeholder='search by prod name'
                        onChange={handleChange}
                    />
                </Grid>
                
            </Grid>
        </Container>
    )
}