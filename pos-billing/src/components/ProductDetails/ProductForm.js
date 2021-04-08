import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startSetProduct,startGetEdit } from '../../Actions/products'

export default function ProductForm(props){
    const { id,name:prodName, price:prodPrice, handleToggle } = props

    const dispatch = useDispatch()

    const [ name,setName ] = useState(prodName ? prodName : '' )
    const [ price,setPrice ] = useState(prodPrice ? prodPrice : '')
    const [formError , setFormError] = useState({})
    const error  = {}

    
    //validators
    const runValidator =()=>{
        // for product
        if(name.trim().length === 0){
            error.name = "name cannot be blank "
          }

        // for price
        if(price.length === 0){
            error.price = "price cannot be blank "
          }       
    }

    const handleChange=(e)=>{
        const input=e.target.name
        if(input === 'name'){
            setName(e.target.value)
        } else if(input === 'price'){
            setPrice(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()

        if(Object.keys(error).length === 0){
            setFormError({})
            const formData={
                name : name,
                price : price
            }
            console.log('formData',formData)
            if(handleToggle){
                // console.log(id,formData)
                dispatch(startGetEdit(id,formData))
                handleToggle()
            } else {
                dispatch(startSetProduct(formData))
            }
            setName('')
            setPrice('')
        } else {
            setFormError(error)
        }
        
    }

    return (
        <Container>
            <Grid xs={6} sm={6}>
                {name ? <Typography variant='h4' style={{position:"relative",color:"purple"}}>EditProduct</Typography> : <Typography variant='h4' style={{position:"relative",color:"purple"}}>Create Product</Typography> }
                <form onSubmit={handleSubmit}>
                <Grid align="center">
                    <Typography variant='subtitle1' >ProductName</Typography>
                   
                    <TextField
                        size="small" 
                        style={{width:"300px"}}
                        type ='text'
                        value ={name}
                        name ='name'
                        onChange ={handleChange}
                    />
                </Grid>
                    <Typography variant='subtitle2' style={{color:"red"}}>{formError.name &&<span>{formError.name}</span>}</Typography>
                    <Grid align="center">
                        <Typography variant="subtitle1">Product price</Typography>
                    
                        <TextField
                            size="small" 
                            style={{width:"300px"}}
                            type ='text'
                            value ={price}
                            name ='price'
                            onChange ={handleChange}
                        />
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.price && <span>{formError.price}</span>}</Typography>
                    </Grid>
                    <Grid align="center">
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Save</Button>
                        
                        {handleToggle && 
                            <Button onClick={handleToggle}
                            type="submit"
                            variant="contained"
                            color="primary"
                            >cancel</Button>}
                    </Grid>
                    

                </form>    
            </Grid>
            
        </Container>
    )
}