import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import { Typography,Button,Grid } from '@mui/material';
import './SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {


  return (
    <div style={{position: 'fixed',maxWidth:'150px'}}>
      <Grid  spacing={2} sx={{alignItems:'center', height:'100%',  display: 'flex', backgroundColor:'whitesmoke',
       flexDirection: 'column', justifyContent:'left' , alignItems:'baseline', position:'fixed', gap:'20px'}}>
      <Link to='/'>
       <Button>
         <HomeIcon className='side-icon'/><br />
        <Typography variant='p' className='side-btn'>Home</Typography>
       </Button>
       </Link>
    
      <Link to='/create'>
      <Button>
         <AddIcon className='side-icon'/><br />
        <Typography variant='p' className='side-btn' >Create</Typography>
       </Button>
       </Link>
       
        <Link to='/crud operation'>
        <Button> 
        <ChatIcon className='side-icon'/><br />
        <Typography variant='p' className='side-btn'>Crud operation</Typography>
       </Button>
       </Link>
       
        <Link to=''>
        <Button>
            <PeopleIcon className='side-icon'/><br />
        <Typography variant='p' className='side-btn'>Community</Typography>
        </Button>
       </Link>
        
    </Grid>

    </div>
    
   
  )
}

export default SideBar