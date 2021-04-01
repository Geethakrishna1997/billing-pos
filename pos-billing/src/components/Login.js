import React, { useState } from 'react'
import axios from 'axios'
import '../App.css';
import validator from 'validator'
import { Input,Button } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

export default function Login(props){
  const { handleAuth } = props


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [formError , setFormError] = useState({})
  const error  = {}

  //validations
  const runValidation = ()=>{
    // for email
    if(email.trim().length === 0){
      error.email = "email cannot be blank "
    } else if( !(validator.isEmail(email))){
      error.email = "invalid email format"
    }

    // for password
    if(password.trim().length === 0){
      error.password = "password cannot be blank"
    }
  }
  

  const handleChange=(e)=>{
    if(e.target.name === "email"){
      setEmail(e.target.value)
    }else if(e.target.name === "password"){
      setPassword(e.target.value)
    }
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    runValidation()

    if(Object.keys(error).length === 0){
      setFormError({})
    const formData={
      email : email,
      password : password
    }

    // if validations pass
    axios.post('http://dct-billing-app.herokuapp.com/api/users/login',formData)
      .then((response) =>{
        const res=response.data
        if(res.hasOwnProperty('errors')){ //Objects.keys(res).includes('errors')          
          alert(res.errors)
        }else{
          alert('successfully logged in')
        //   console.log(res.token)
          localStorage.setItem('token',res.token)
          props.history.push('/')
          handleAuth()
        }
      })
      .catch((err) =>{
        alert(err.message)
      })
      setEmail('')
      setPassword('')
    } else {
      setFormError(error)
    }
  }

 

  return  (
      <div className='icon'>
        <div className='icon_class'>
          <PersonIcon fontSize='large' />
        </div>
        <div className='text'>Login</div>

        <div className='row m-2'>
          <form >

            <Input 
              type="text"
              placeholder="enter email"
              value={email}
              onChange={handleChange}
              name="email"
              variant='outlined'
            /><br/>
            {formError.email && <span>{formError.email}</span>}<br/>


            <Input 
              type="password"
              placeholder="enter password"
              value={password}
              onChange={handleChange}
              variant='outlined'
              name="password"
            /><br/>
            {formError.password && <span>{formError.password}</span>}<br/>

            <Button 
              onClick={handleSubmit} 
              variant='contained'
              color='primary'
              >Login</Button>
          </form>
        </div>
      </div>
    )
  }










 