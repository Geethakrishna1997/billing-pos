import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {TextField,  Button, Grid, Container, Typography, Card, CardActionArea,  CardActions, CardContent} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete'
import { startSetBills } from '../../Actions/bills';
import {addItem, resetItems , incrementQuantity, decrementQuantity, removeItem} from '../../Actions/LineItems'


export default function BillForm(){
    const dispatch=useDispatch()

    const customersList=useSelector((state)=>{
        return state.customers
    })

    const productsList=useSelector((state)=>{
        return state.products
    })

    const lineItems = useSelector((state) => {
        return state.lineItems
    })

    const [ date,setDate ] = useState('')
    const [ customer,setCustomer ] = useState('')
    const [ product,setProduct ] = useState('')
    const [ quantity,setQuantity ] = useState(1)
    const [formError , setFormError] = useState({})
    const error  = {}

    //validation
    const runValidator=()=>{
        // for date
        if(!date){
            error.date = "date cannot be blank "
          }

        // for customer
        if(customer.length === 0){
            error.customer = "customer cannot be blank "
          }       

        // for product
        if(product.length === 0){
            error.product = "product cannot be blank "
          }    
    }

    const handleDateChange=(e)=>{
        setDate(e.target.value)
    }

    const handleCustomerChange=(e)=>{
        setCustomer(e.target.value)
    }

    const handleProductChange=(e,val)=>{
        console.log('product_id', val)
        if(val){
            setProduct(e.target.value)
            newLineItem(val)
        } else {
            setProduct('')
        }
    }

    const newLineItem = (item) => {
        const newItem = {
            'prodId' : new Date(),
            'prodName' : item.name,
            'price' : item.price,
            'product' : item._id,
            'quantity' : quantity
        }
        dispatch(addItem(newItem))
        console.log('lineItems', lineItems)
    }

    //decreasing quantity
    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id))
    }

    //increasing quantity
    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id))
    }

    //removing item in lineItems
    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()

        if(Object.keys(error).length === 0){
            setFormError({})
            const formData = {
                'date' : date ,
                'customer' : customer,
                'lineItems' : lineItems                
            }
            console.log('bill form',formData)
            dispatch(startSetBills(formData))
            setDate('')
            setCustomer('')
            setProduct('')
            dispatch(resetItems())
            } else {
                setFormError(error)
        }        
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>

                    <Grid item xs={10} align='center' ><h2>Generate Bill</h2></Grid>

                    <Grid item xs={10} align='center'>
                        <TextField 
                            size="small" 
                            style={{width:"300px"}}
                            type='date'
                            value={date} 
                            placeholder='YYYY-MM-DD'
                            onChange={handleDateChange}
                        /><br/>
                    </Grid>
                    <Grid item xs={10} align='center' >
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.date && <span>{formError.date}</span>}</Typography>
                    </Grid>

                    <Grid item xs={10} align='center'>
                        <FormControl size="small" style={{width:"300px"}}>
                            <InputLabel id="demo-simple-select-label">Customers</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleCustomerChange}
                                value={customer}
                            >
                                {customersList.map(c=>{
                                    return <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>                        
                    </Grid>
                    <Grid item xs={10} align='center' >
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.customer && <span>{formError.customer}</span>}</Typography>
                    </Grid>

                    <Grid item xs={10} align='center'>
                    <Autocomplete
                            options={productsList}
                            getOptionLabel={(option) => option.name}
                            onChange={handleProductChange}
                            size="small" 
                            style={{width:"300px"}}
                            renderInput={(params) => (
                            <TextField {...params} label="product" variant="outlined" fullWidth />
                            )}
                    />

                    </Grid>
                    <Grid item xs={10} align='center' >
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.products &&<span>{formError.products}</span>}</Typography>
                    </Grid>

                 
                       
                    
                    <Grid item xs={10} align='center'> 
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary"
                        > ADD BILL </Button>
                    </Grid>

                    <Grid item xs={6} >
                    {lineItems.length > 0 && (
                        <div>
                            <Typography variant='h5'>Selected Products :</Typography>
                            {/* <Typography >Total Bill : ₹{totalBillCalculation()}</Typography> */}
                        </div>
                    )}

                    <Grid item xs={12} style={{overflowY : lineItems.length > 0 && 'scroll' , maxHeight : '400px'}}>
                       {lineItems.map((item) => {
                          return <Card elevation={3} style={{marginBottom : '20px', width:'500px'}} size="small" key={item.prodId}>
                                 <CardActionArea>
                                   <CardContent>
                                      {item.prodName} - <b>₹{item.price}</b>
                                   </CardContent>
                                   <CardActions >
                                      <Button size="small" color="primary"
                                        onClick={() => {handleDecrement(item.prodId)}}> -   
                                     </Button>
                                     {item.quantity}
                                     <Button size="small" color="primary"
                                        onClick={() => {handleIncrement(item.prodId)}}> +
                                     </Button>
                                     <Button size="small" color="secondary"
                                        onClick={() => {handleRemove(item.prodId)}} > cancel 
                                    </Button>
                                   </CardActions>
                                 </CardActionArea>
                                  </Card>
                       })}
                    </Grid>
                </Grid>

                </Grid>    
            </form>  
        </Container>                
    )
}

