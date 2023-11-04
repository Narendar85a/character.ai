import React from 'react'
import { Card, Container, Grid, Typography,Box, Paper} from '@mui/material'
import {persons, items} from '../../../data'
import './HomePage.css'



const HomePage = () => {
  return (
    <div className='home'>
 
    <Container>
    <Grid container className='homeg' >
     {
        persons.map((people)=> (
            <Card className='homec'>
                <img src={people.url} alt='' width='200px' height='100px' />
                <Typography>{people.name}</Typography>
                <Typography style={{fontSize:'12px'}}>{people.email}</Typography>
                <Box className='homed'>
                <Typography >{people.created}</Typography>
                <Typography>{people.balance}</Typography> 
                </Box>
               
            </Card>
        ))
     }
</Grid>
  </Container><hr/>
   
  <Container>
    <Grid className='homeg2'>
        {
         items.map((item) => (
            <Card className='homec2'>
            <Box className='homeb'>
             <img  src={item.url} alt='' width='50px' height='50px' />
             <Typography>{item.name}</Typography>
            </Box>
              <Box className='homeb2'>
               <Paper sx={{backgroundColor:'grey', color:'white',  boxShadow: '2px 2px 2px 2px grey'}}>{item.discription}</Paper><br/>
               <Paper variant="outlined" sx={{backgroundColor:'grey', color:'white',boxShadow: '2px 2px 2px 2px grey'}}>{item.discuss}</Paper>
              </Box>
            
          </Card>
         ))
        }
    </Grid>
  </Container>
  </div>
  )
}

export default HomePage