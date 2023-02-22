import { CardContent,   Box, Card } from '@mui/material'
import React from 'react'
import Layout from '../../../../components/layout'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
 
 
 
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
 
 

const Custommanage=()=> {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('ARC Earth Movers', 'Gujarat', 'Rajkot', 'Active'),
    createData('ACE Hardwares', 'West Bengal', 'Kolkata', 'Active'),
    createData('JCB Experts', 'West Bengal', 'Dugapur', 'Active'),
    createData('Shankar', 'West Bengal', 'Siliguri', 'In Active'),
     
  ];
 
  


  return (
  <div>


<Layout >
  <Box className='table1'> 
<FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Search...
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Search..."
                  type="text"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton size="small" edge="end">
                        {<SearchOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>     <Link to="/createcustomer" > <Button  variant="contained"   >Create</Button></Link>
 
<Box >
 

  <Card>

 
  
<CardContent className='custom'>
<TableContainer component={Paper}>
      <Table sx={{ 'tr:nth-child(even)': { backgroundColor:  "#F1F1F1" }  }} >
        <TableHead>
          <TableRow >
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">City&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Actions&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <Button variant="outlined" size = 'small'><VisibilityIcon/> View details
              
              </Button>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



</CardContent>

</Card>

</Box>
</Box>

 
</Layout> 

    </div>
  )
}

export default Custommanage