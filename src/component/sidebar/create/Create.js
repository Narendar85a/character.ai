import {useState} from 'react';
import { Box, Button, FormHelperText, Typography, FormLabel, TextField , Select, MenuItem,} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LockIcon from '@mui/icons-material/Lock';
import './Create.css';


const Create = () => {
const [data, setData] = useState({username:'', textData:'', menu:''});

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value});
};


const handleSubmit = (e) => {
  e.preventDefault();
  console.log(data);
};

  return (

    <Box className='form'>
    <Box className='formb1'>
      <Typography variant='h5'>Create a Character</Typography>
        <Typography variant='p' >For more information about Character creation, see
        <Button>
            <MenuBookIcon/><span>Character Book</span>
        </Button>
        </Typography><br/>
       

        
      <form action="/action_page.php" onSubmit={handleSubmit} className='form-form'>
       <FormLabel>1.Name</FormLabel>
        <FormHelperText>The name can include first and last names.</FormHelperText>
        <TextField sx={{width:'99%'}} variant='outlined' type='text' name='username' value={data.username} onChange={handleChange}/><br/><br/>
      
        <FormLabel>2.Greeting</FormLabel>
        <FormHelperText>What would they say to introduce themselves? For example, "Albert Einstein" could say: "Hello I am Albert Einstein. I was born in March 14, 1879, 
            and I conceived of the theory of special relativity and general relativity."</FormHelperText>
        <textarea type='text' name='textData' value={data.textData} className='form-text' onChange={handleChange} /><br/><br/>
     
        <FormLabel>3.Visibility<Button size='small'><LockIcon/></Button></FormLabel>
        <FormHelperText>Who is allowed to talk to them?</FormHelperText>
        <Select value={data.menu}  onChange={handleChange} sx={{width:'99%'}}>
          <MenuItem value={1}>Public: Anyone can chat</MenuItem>
          <MenuItem value={2}>Unlisted: Anyone with the link can chat</MenuItem>
          <MenuItem value={3}>Private: Only you can chat</MenuItem>
        </Select><br/><br/>

        <FormLabel>Avatar</FormLabel>
        <FormHelperText>You can either create an image from text or upload an image.</FormHelperText>
        <Button variant='outlined' sx={{width:'10rem'}}>Upload Image</Button>

       <Box className='formb2' >
        <Button type='submit' variant='contained' sx={{color:'white'}}>Submit</Button>
       </Box>

       </form>
       </Box>

    </Box>
  )
}

export default Create
