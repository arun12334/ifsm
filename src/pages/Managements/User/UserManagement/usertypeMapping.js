import React from 'react'
import Layout from '../../../../components/layout'
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import Button from '@mui/material/Button';
import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeepMountedModal1 from './model';
 
const UsertypeMapping = () => {

 




  return (
    <div>



      <Layout >



        <Box className='mapping'>
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
          </FormControl>   <Link to="/createmaptype" > <Button variant="contained"   >Create</Button></Link>
          <Card>
            <CardContent>

              <Table>

                <TableHead>
                  <TableRow>

                    <TableCell>User Name</TableCell>
                    <TableCell align="right">User Type</TableCell>
                    <TableCell align="right">Actions</TableCell>


                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableCell align="right">Samir Gowswami</TableCell>
                  <TableCell align="right">PSM</TableCell>

                  <TableCell align="right"><Button  ><EditLocationRoundedIcon color='blue' /><KeepMountedModal1/></Button>
              
           
                  </TableCell>

                </TableBody>
                <TableBody>
                  <TableCell align="right">Ram Charan</TableCell>
                  <TableCell align="right">EXPERT</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /><KeepMountedModal1/> </Button></TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="right">Santosh</TableCell>
                  <TableCell align="right">PSM</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /><KeepMountedModal1/> </Button></TableCell>
                </TableBody>
                <TableBody>
                  <TableCell align="right">Gokul</TableCell>
                  <TableCell align="right">EXPERT</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /> <KeepMountedModal1/></Button></TableCell>
                </TableBody>
              </Table>
            </CardContent>
          </Card>


        </Box>
      </Layout>


    </div>
  )
}

export default UsertypeMapping