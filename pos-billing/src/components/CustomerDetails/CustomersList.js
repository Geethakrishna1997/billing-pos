import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import CustomerItem from './CustomerItem'

export default function CustomersList(props){
    const { list } = props
    
    return (
        <Grid container>
            <Grid item>
                <Typography variant="h4" style={{color:"green"}}>My Customers - {list.length}</Typography>
            </Grid>
            <Grid item>
                <Typography>
                    {list.map(c =>{
                        return <CustomerItem 
                                key={c._id}
                                {...c} 
                            />
                    })}
                </Typography>
            </Grid>
            
        </Grid>
    )
}