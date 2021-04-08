import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import { startdeletecustomer } from '../../Actions/customers'
import EditCustomer from './EditCustomer'

export default function CustomerItem( props ){
    const { _id,name,mobile,email,user,createdAt,updatedAt } = props

    const dispatch=useDispatch()
    const [ toggle,setToggle ] = useState(false)

    const removeCustomer=(id)=>{
        dispatch(startdeletecustomer(id))
    }
    
    const handleToggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditCustomer
                        id={_id}
                        name={name} 
                        mobile={mobile}
                        email={email}
                        handleToggle={handleToggle} 
                    />
                </div>
                ) : (
                <>
                <Grid item xs={12} >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                {/* <Typography>customer Id - {_id}</Typography> */}
                                <Typography variant="subtitle1">customer name - {name}</Typography>
                                <Typography variant="subtitle1">customer mobile - {mobile}</Typography>
                                <Typography variant="subtitle1">customer email - {email}</Typography>
                                {/* <Typography>user Id - {user}</Typography> */}
                                {/* <Typography>createdAt - {createdAt}</Typography> */}
                                {/* <Typography>updatedAt - {updatedAt}</Typography> */}

                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="secondary" onClick={()=>{removeCustomer(_id)}}><DeleteIcon/></Button>
                                <Button variant="contained" color="inherit" onClick={handleToggle}><EditIcon/></Button>
                            </CardActions>
                        </CardActionArea>  
                    </Card>                    
                </Grid>
                </>
                )
            }             
        </div>
    )
}