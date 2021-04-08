import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startdeleteproduct } from '../../Actions/products'
import EditProduct from './EditProduct'

export default function ProductItem( props ){
    const { _id,name,price,user,createdAt,updatedAt } = props

    const dispatch=useDispatch()
    const [ toggle,setToggle ] = useState(false)

    const removeProduct=(id)=>{
        dispatch(startdeleteproduct(id))
    }

    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditProduct 
                        id={_id}
                        name={name} 
                        price={price}
                        handleToggle={handleToggle} 
                    />
                </div>
            ) : (
            <Grid xs={12}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="subtitle1">Product name : {name}</Typography>
                            <Typography variant="subtitle1">Product price : {price}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                
                            // ><IconButton 
                                onClick={()=>{removeProduct(_id)}}
                                variant="contained" 
                                color="secondary"
                                aria-label="delete">
                            <DeleteIcon />
                          {/* </IconButton> */}
                          </Button>
                            <Button
                                onClick={handleToggle}
                                variant="contained" 
                                color="inherit"
                            ><EditIcon/></Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Grid>
            )}                        
        </div>
    )
}