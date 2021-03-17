import React,{ useState } from 'react'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startSetUsers } from '../Actions/userAuth'

export default function Register(props){
    const dispatch = useDispatch()

    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [business,setBusiness] = useState('')
    const [address,setAddress] = useState('')
    const [formError , setFormError] = useState({})
    const error  = {}

    const runValidation =()=>{
        // for name
        if(userName.trim().length === 0){
            error.userName = "name cannot be blank"
        }
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
        const input=e.target.name
        if(input === 'username'){
            setUserName(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        } else if(input === 'password'){
            setPassword(e.target.value)
        } else if(input === 'businessname'){
            setBusiness(e.target.value)
        } else if(input === 'address'){
            setAddress(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidation()
        if(Object.keys(error).length === 0){
            setFormError({})
            const formData={
                username : userName,
                email : email,
                password : password,
                businessName : business,
                address : address 
            }
            console.log(formData)
            dispatch(startSetUsers(formData,props.history.push))
            
            //reset values
            setUserName('')
            setEmail('')
            setPassword('')
            setBusiness('')
            setAddress('')
        }else {
            setFormError(error)
        }        
    }

    return (
        <div>
            <h2>Register with us</h2>

            <form onSubmit={handleSubmit}>
                <label>Username</label><br/>

                <input 
                    type='text'
                    value={userName}
                    name='username'
                    onChange={handleChange}
                /><br/>
                {formError.userName && <span>{formError.userName}</span>}<br/>

                <label>Email</label><br/>

                <input 
                    type='text'
                    value={email}
                    name='email'
                    onChange={handleChange}
                /><br/>
                {formError.email && <span>{formError.email}</span>}<br/>

                <label>Password</label><br/>

                <input 
                    type='password'
                    value={password}
                    name='password'
                    onChange={handleChange}
                /><br/>
                {formError.password && <span>{formError.password}</span>}<br/>

                <label>BusinessName</label><br/>

                <input 
                    type='text'
                    value={business}
                    name='businessname'
                    onChange={handleChange}
                /><br/>
                {formError.business && <span>{formError.business}</span>}<br/>

                <label>Address</label><br/>

                <input 
                    type='text'
                    value={address}
                    name='address'
                    onChange={handleChange}
                /><br/>
                {formError.address && <span>{formError.address}</span>}

                <input type='submit' value='Register' />

            </form>

        </div>
    )
}