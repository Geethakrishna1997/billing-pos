import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
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
                    <button onClick={handleToggle}>cancel</button>
                </div>
                ) : (
                <>
                <Grid item xs={4} >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography>customer Id - {_id}</Typography>
                                <Typography>customer name - {name}</Typography>
                                <Typography>customer mobile - {mobile}</Typography>
                                <Typography>customer email - {email}</Typography>
                                <Typography>user Id - {user}</Typography>
                                <Typography>createdAt - {createdAt}</Typography>
                                <Typography>updatedAt - {updatedAt}</Typography>

                            </CardContent>
                            <CardActions>
                                <Button color="secondary" onClick={()=>{removeCustomer(_id)}}>DEL</Button>
                                <Button color="#ff3d00" onClick={handleToggle}>Edit</Button>
                            </CardActions>
                        </CardActionArea>  
                    </Card>
                    {/* customer Id - {_id}<br/>
                    customer name - {name}<br/>
                    customer mobile - {mobile}<br/>
                    customer email - {email}<br/>
                    user Id - {user}<br/>
                    createdAt - {createdAt}<br/>
                    updatedAt - {updatedAt}<br/>  
                    
                    <Button color="secondary" onClick={()=>{removeCustomer(_id)}}>DEL</Button>
                    <Button color="#ff3d00" onClick={handleToggle}>Edit</Button> */}
                </Grid>
                </>
                )
            }             
        </div>
    )
}