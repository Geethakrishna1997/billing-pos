import React from 'react'
import { Link,Route, withRouter } from 'react-router-dom'
// import './App.css';
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './UserDetails/Account'
import {useDispatch} from "react-redux"
import {startClearStore} from '../Actions/userAuth'
import ProductsContainer from './ProductDetails/ProductsContainer'
import CustomerContainer from './CustomerDetails/CustomerContainer'
import BillContainer from './BillingDetails/BillContainer'
import DashboardContainer from './DashBoard/DashBoardContainer'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShowBill from './BillingDetails/ShowBill'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar=(props)=>{
    const { userLoggedIn,handleAuth,history } = props
    // const classes = useStyles();

    const dispatch=useDispatch() 

    return (
        <Container>
            
            <AppBar position="static" color="secondary">
                <Toolbar>
                
                    <Typography variant="h6" style={{flexGrow : 1}}>
                        POS - Billing
                    </Typography>
                    <Grid >
                        
                        {!userLoggedIn ? (
                            <>
                            <Button color="inherit" component={Link} to='/'>Home</Button>
                            <Button color="inherit" component={Link} to='/register'>Register</Button>
                            <Button color="inherit" component={Link} to='/login'>Login</Button>
                            
                            </>
                        ) : (
                            <>
                            <Button color="inherit" component={Link} to='/account'>Account</Button>
                            <Button color="inherit" component={Link} to='/products'>Products</Button>
                            <Button color="inherit" component={Link} to='/customers'>Customers</Button>
                            <Button color="inherit" component={Link} to='/billgenerator'>Bill Generator</Button>
                            <Button color="inherit" component={Link} to='/dashboard'>DashBoard</Button>
                            <Button color="inherit" component={Link} onClick={()=>{
                                                    dispatch(startClearStore())
                                                    localStorage.removeItem('token')
                                                    alert('successfully Logged out')
                                                    handleAuth()
                                                    history.push('/')
                                                }}>Logout</Button>
                            </>
                        )}
                    </Grid>
                    
                </Toolbar>
            </AppBar>
            <Grid>
                <Route path='/' component={Home} exact={true} />
                <Route path='/register' component={Register} />
                <Route path='/login' render={(props)=>{
                    return <Login 
                        {...props} 
                        handleAuth={handleAuth} 
                    />
                }} />
                <Route path="/account" component={Account} />
                <Route path="/products" component={ProductsContainer} />
                <Route path='/customers' component={CustomerContainer} />
                <Route path='/billgenerator' component={BillContainer} />
                <Route path='/dashboard' component={DashboardContainer} />
                <Route path='/showbill' component={ShowBill} />
            </Grid>
        </Container>
    )
}

export default withRouter(NavBar)