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

const UserManage = () => {
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
          </FormControl>   <Link to="/createuser" > <Button variant="contained"   >Create</Button></Link>
          <Card>
            <CardContent>

              <Table>

                <TableHead>
                  <TableRow>

                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Moblie Number</TableCell>
                    <TableCell align="right">Alt.Phone Number</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">User Status</TableCell>
                    <TableCell align="right">Actions</TableCell>


                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableCell align="right">Galactus</TableCell>
                  <TableCell align="right">Hudson</TableCell>
                  <TableCell align="right">98873 87488</TableCell>
                  <TableCell align="right">98776 87878</TableCell>
                  <TableCell align="right">tezt@gmail.com</TableCell>
                  <TableCell align="right">Active</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
                <TableBody>
                
                <TableCell align="right">Tony</TableCell>
                  <TableCell align="right">Hudson</TableCell>
                  <TableCell align="right">98873 87488</TableCell>
                  <TableCell align="right">98776 87878</TableCell>
                  <TableCell align="right">tezt@gmail.com</TableCell>
                  <TableCell align="right">Active</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
                <TableBody>
               
                <TableCell align="right">Howard</TableCell>
                  <TableCell align="right">Hudson</TableCell>
                  <TableCell align="right">98873 87488</TableCell>
                  <TableCell align="right">98776 87878</TableCell>
                  <TableCell align="right">tezt@gmail.com</TableCell>
                  <TableCell align="right">Active</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
                <TableBody>
                 
                <TableCell align="right">Nick</TableCell>
                  <TableCell align="right">Hudson</TableCell>
                  <TableCell align="right">98873 87488</TableCell>
                  <TableCell align="right">98776 87878</TableCell>
                  <TableCell align="right">tezt@gmail.com</TableCell>
                  <TableCell align="right">Active</TableCell>

                  <TableCell align="right"><Button><EditLocationRoundedIcon color='blue' /> </Button></TableCell>
                </TableBody>
              </Table>
            </CardContent>
          </Card>


        </Box>
      </Layout>


    </div>
  )
}

export default UserManage