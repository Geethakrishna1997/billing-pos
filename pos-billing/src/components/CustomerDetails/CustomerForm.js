import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Container, Grid, TextField, Typography } from "@material-ui/core"
import { startEditCustomer, startSetCustomers } from '../../Actions/customers'

export default function ProductForm(props){
    const { id,name:custName, mobile:custMobile, email:custEmail, handleToggle } = props

    const dispatch = useDispatch()

    const [ name,setName ] = useState(custName ? custName : '' )
    const [ mobile,setMobile ] = useState(custMobile ? custMobile : '')
    const [ email,setEmail ] = useState(custEmail ? custEmail : '')
    const [formError , setFormError] = useState({})
    const error  = {}

    //validators
    const runValidator =()=>{
        // for name
        if(name.trim().length === 0){
            error.name = "name cannot be blank "
          }

        // for mobile
        if(mobile.trim().length === 0){
            error.mobile = "mobile cannot be blank "
          }       
    }

    const handleChange=(e)=>{
        const input=e.target.name
        if(input === 'name'){
            setName(e.target.value)
        } else if(input === 'mobile'){
            setMobile(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()

        if(Object.keys(error).length === 0){
            setFormError({})
            const formData={
                name : name,
                mobile : mobile,
                email : email
            }
            console.log('formData',formData)
            if(handleToggle){
                console.log(id,formData)
                dispatch(startEditCustomer(id,formData))
                handleToggle()
            } else {
                dispatch(startSetCustomers(formData))
            }
            setName('')
            setMobile('')
            setEmail('')
        } else {
            setFormError(error)
        }
        
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={10} align="center">
                    {name ? <Typography variant='h4' style={{position:"relative"}}>
                                EditCustomer</Typography> : 
                            <Typography variant='h4' style={{position:"relative"}}>
                                Create Customer</Typography> }    
                </Grid>
                <Grid item xs={10} align="center">
                    <form onSubmit={handleSubmit}>
                    <Grid item xs={10} align="center">
                    <Typography variant='subtitle1'>Customer name</Typography>
                        <TextField 
                            size="small"
                            style={{width:"300px"}}
                            type ='text'
                            value ={name}
                            name ='name'
                            onChange ={handleChange}
                        />
                        
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.name && <span>{formError.name}</span>}</Typography>
                    </Grid>
                    <Grid item xs={10} align="center">
                        <Typography variant="subtitle1">Customer mobile</Typography>
                        <TextField
                            size="small"
                            style={{width:"300px"}}
                            type ='text'
                            value={mobile}
                            name ='mobile'
                            onChange ={handleChange}
                        />                
                        
                        <Typography variant='subtitle2' style={{color:"red"}}>{formError.mobile && <span>{formError.mobile}</span>}</Typography>
                    </Grid>
                    <Grid item xs={10} align="center">
                        <Typography>Customer email</Typography>
                        <TextField
                            size="small"
                            style={{width:"300px"}}
                            type ='email'
                            value ={email}
                            name ='email'
                            onChange ={handleChange}
                        /><br/>
                    </Grid>
                    <Grid item xs={10} align="center">
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Save</Button>
                    </Grid>
                    </form>
                </Grid>
            </Grid>
            
        </Container>
    )
}