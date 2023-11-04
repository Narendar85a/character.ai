import React, { useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, Paper, styled, TableBody, Button, TextField,Dialog } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './Crud.css'
import EditIcon from '@mui/icons-material/Edit';
import Edit from './Edit'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({

      backgroundColor: theme.palette.action.hover,

  }));

  const Crud = () => {
    const [todo, setTodo] = useState({ id: '', title: '', info: '', price: '', company: '' });
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState({ id: '', title: '', info: '', price: '', company: '' });
  
    const handleTodos = (e) => {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    };
  
    const handleAddTodo = () => {
      setItems([...items, todo]);
      setTodo({ id: '', title: '', info: '', price: '', company: '' });
    };
  
    const handleDelete = (id) => {
      setItems (items.filter((item) => item.id !== id));
      console.log(items)
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedItems = items.map((item) => (item.id === edit.id ? edit : item));
      setItems(updatedItems);
      setOpen(false);
    };
  
    const handleClickOpen = (item) => {
      setEdit(item);
      setOpen(true);
    };
  
    return (
      <TableContainer component={Paper} className='crud' sx={{ backgroundColor: 'whitesmoke' }}>
        <Table className='crud-table' sx={{ maxWidth: '75rem', overflowY: 'auto' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Information</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Company</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">
                <TextField variant="outlined" name='id' value={todo.id} onChange={handleTodos} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField variant="outlined" name='title' value={todo.title} onChange={handleTodos} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField variant="outlined" name='info' value={todo.info} onChange={handleTodos} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField variant="outlined" name='price' value={todo.price} onChange={handleTodos} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <TextField variant="outlined" name='company' value={todo.company} onChange={handleTodos} />
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button variant='outlined' sx={{ textTransform: 'capitalize' }} type='submit' onClick={handleAddTodo}>
                  Add new data
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            {items.map((item, id) => (
              <StyledTableRow key={id}>
                <StyledTableCell align="center">{item.id}</StyledTableCell>
                <StyledTableCell align="center">{item.title}</StyledTableCell>
                <StyledTableCell align="center">{item.info}</StyledTableCell>
                <StyledTableCell align="center">{item.price}</StyledTableCell>
                <StyledTableCell align="center">{item.company}</StyledTableCell>
                <StyledTableCell align="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton color="danger" onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  
                    <IconButton onClick={() => handleClickOpen(item)} >
                    <EditIcon />
                   </IconButton>
                 
                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Dialog
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Edit
            open={open}
            setOpen={setOpen}
            edit={edit}
            setEdit={setEdit}
            handleUpdate={handleUpdate}
          />
        </Dialog>
      </TableContainer>
    );
  };

export default Crud;