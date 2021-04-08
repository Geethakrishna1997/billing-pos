import React,{ useState } from 'react'
import '../App.css';
import { Input,Button, Container, Grid, Typography } from '@material-ui/core'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { startSetUsers } from '../Actions/userAuth'
import { Link } from 'react-router-dom';

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
        <Container>
            <Grid className='icon'>
                <div className='icon_class'>
                    <PersonAddIcon fontSize='large' />
                </div>
                <div className='text'>Register with us</div>
            </Grid>

            <Grid className='row m-2'>
                <form >
                    <Grid item xs={10} align='center'>

                    <Input 
                        type='text'
                        value={userName}
                        name='username'
                        onChange={handleChange}
                        placeholder='Enter username'
                        variant='outlined'
                        className='p-2'
                    /><br/>
                    <Typography variant='subtitle2' style={{color:"red"}}>{formError.userName && <span>{formError.userName}</span>}</Typography>
                    </Grid>

                    <Input 
                        type='email'
                        value={email}
                        name='email'
                        onChange={handleChange}
                        placeholder='enter email'
                        variant='outlined'
                        className='p-2'

                    /><br/>
                    <Typography variant='subtitle2' style={{color:"red"}}>{formError.email && <span>{formError.email}</span>}</Typography>

                    <Input 
                        type='password'
                        value={password}
                        name='password'
                        onChange={handleChange}
                        placeholder='Enter password'
                        variant='outlined'
                        className='p-2'

                    /><br/>
                    <Typography variant='subtitle2' style={{color:"red"}}>{formError.password && <span>{formError.password}</span>}</Typography>

                    <Input 
                        type='text'
                        value={business}
                        name='businessname'
                        onChange={handleChange}
                        placeholder='Enter businessname'
                        variant='outlined'
                        className='p-2'

                    /><br/>
                    {/* <Typography variant='subtitle2' style={{color:"red"}}>{formError.business && <span>{formError.business}</span>}</Typography> */}

                    {/* <label>Address</label><br/> */}

                    <Input 
                        type='text'
                        value={address}
                        name='address'
                        onChange={handleChange}
                        placeholder='Enter address'
                        variant='outlined'
                        className='p-2'

                    /><br/>
                    {/* <Typography variant='subtitle2' style={{color:"red"}}>{formError.address && <span>{formError.address}</span>}</Typography> */}

                    <Button 
                        onClick={handleSubmit} 
                        variant='contained'
                        color='primary'
                        >Register</Button>

                    <Grid>
                        <Link to="/login" variant="body2">
                                Already have an account? login
                        </Link>
                    </Grid>

                </form>
            </Grid>
        </Container>
    )
}