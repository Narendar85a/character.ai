import React, { useState } from 'react'
import {AppBar, IconButton, Toolbar, Typography, Box, Button, Dialog} from '@mui/material'
import {InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuBar from './MenuBar';
import LoginSignup from './LoginSignup';

import './TopBar.css'

const TopBar = () => {
 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar position="fixed">
      <Toolbar className='topbar-container'>
      <Box className='topbox1'>
        <Typography variant="h4" >character.ai</Typography>
      </Box>

      <Box className='topbox2'>
      <IconButton sx={{color:'GrayText',gap:'10px',borderRadius:'0px'}}>
            <SearchIcon/>
        <InputBase sx={{color:'GrayText'}}
        placeholder='Search...'
        />
         </IconButton>

        <Button sx={{color:'GrayText'}}>
            <MenuBookIcon/>
        </Button>

        <Button onClick={() => alert('you need any help!')} sx={{color:'GrayText'}} >
            <HelpOutlineIcon/>
        </Button> 
        
        <MenuBar/>
        <Button variant="contained" sx={{textTransform:'capitalize'}} onClick={handleOpen}>Login</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
        >
           <LoginSignup
            open={open}
            setOpen={setOpen}
           />
        </Dialog>
       
      </Box>
        
      </Toolbar>
    </AppBar>
  )
}

export default TopBar