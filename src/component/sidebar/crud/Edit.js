import React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography, Box } from '@mui/material';
import './Edit.css';

const Edit = ({  handleUpdate, edit, setEdit }) => {
  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  return (
    <Box className="edit-box">
      <Box className="edit">
            <Typography variant="h5">Edit Item</Typography>
            <form onSubmit={handleUpdate}>
              <TextField
                sx={{ width: '35rem' }}
                label="Id"
                variant="standard"
                name="id"
                value={edit.id}
                onChange={handleEdit}
              />
              <TextField
                sx={{ width: '35rem' }}
                label="Title"
                variant="standard"
                name="title"
                value={edit.title}
                onChange={handleEdit}
              />
              <TextField
                sx={{ width: '35rem' }}
                label="Information"
                variant="standard"
                name="info"
                value={edit.info}
                onChange={handleEdit}
              />
              <TextField
                sx={{ width: '35rem' }}
                label="Price"
                variant="standard"
                name="price"
                value={edit.price}
                onChange={handleEdit}
              />
              <TextField
                sx={{ width: '35rem' }}
                label="Company"
                variant="standard"
                name="company"
                value={edit.company}
                onChange={handleEdit}
              />
              <br /><br />
              <Button sx={{ textTransform: 'capitalize' }} variant="outlined" type="submit">
                Save changes
              </Button>
            </form>
      </Box>
    </Box>
  );
};

export default Edit;
