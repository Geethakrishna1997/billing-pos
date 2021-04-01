import { Grid } from '@material-ui/core'
import React from 'react'
import CustomerItem from './CustomerItem'

export default function CustomersList(props){
    const { list } = props
    
    return (
        <Grid >
            <h2>My Customers - {list.length}</h2>
            
            <ul>
                {list.map(c =>{
                    return <li key={c._id}>
                        <CustomerItem 
                            {...c} 
                        />
                        
                    </li>
                })}
            </ul>
        </Grid>
    )
}