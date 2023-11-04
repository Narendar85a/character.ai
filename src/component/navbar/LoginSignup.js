import React, { useState } from 'react'
import { Box,  Button,  TextField, Typography } from '@mui/material'
import './LoginSignup.css';

const Login = () => {
  const [action, setAction] = useState('Login')

  return (
    <Box className='login'>
      <form className='login-form'><br/><br/>
          <Typography variant='h5' sx={{color:'blue'}}>{action}</Typography><br/><br/>
          { action === 'Login' ? <div></div> : 
          <div><TextField label="Username" variant="outlined" className='login-text'/><br/><br/></div>
          }
          
          <TextField label="Email" variant="outlined" className='login-text'/><br/><br/>
          <TextField label="Password" variant="outlined" className='login-text'/><br/><br/>
          {
            action === 'Sign Up' ? <div></div> :
             <div><Typography variant='caption'>Forgot Password? <span style={{color:'blue'}}>Click here</span></Typography><br/><br/><br/></div>   

          }

          <Box sx={{display:'flex', justifyContent:'space-evenly',}}>
          <Button variant='contained' sx={{borderRadius:'20px', textTransform:'capitalize', width:'100px'}} onClick={() => setAction('Login')}>Login</Button>
          <Button variant='contained' sx={{borderRadius:'20px',textTransform:'capitalize', width:'100px'}} onClick={() => setAction('Sign Up')}>Sign Up</Button>
          </Box>
          
      </form>
    </Box>
  )
}

export default Login