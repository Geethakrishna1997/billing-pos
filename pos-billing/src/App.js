import './App.css';
import { Container, Grid, Typography } from '@material-ui/core'
import React,{ useState,useEffect } from 'react'
import NavBar from './components/NavBar'

function App() {
  const [ userLoggedIn, setUserLoggedIn ] = useState(false)

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])

  return (
    <>
      <Container>
        <Grid className="App">
          {/* <Typography variant='h3'>POS Billing Application</Typography> */}
          <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
          
        </Grid>
      </Container>
    </>
  );
}

export default App;
