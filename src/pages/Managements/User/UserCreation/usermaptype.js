import { CardContent } from '@mui/material'
import React from 'react'
import Layout from '../../../../components/layout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Usermaptype=()=> {
  return (
    <div>
<Layout>

<Box className='maptype'>
  <Link to='/usertypemapping'><Button className='button' variant="contained" size='small'>Back</Button>  </Link>

<Card>
<CardContent>


<TextField className='map'
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
           
            
        >
           
            <MenuItem  >
              <Typography>Acctive</Typography>              
            </MenuItem>
            <MenuItem  >
              <Typography>In Acctive</Typography>              
            </MenuItem>
           
            
           
        </TextField>
        <CardContent>
        </CardContent>
        <TextField className='map'
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
           
            
        >
           
            <MenuItem  >
              <Typography>Acctive</Typography>              
            </MenuItem>
            <MenuItem  >
              <Typography>In Acctive</Typography>              
            </MenuItem>
           
            
           
        </TextField>
        <Stack spacing={2} direction="row">
        <Button variant="outlined" size='small'>Clear</Button>  
      <Button variant="contained">Save</Button>
     
    </Stack>
        </CardContent>


</Card>

</Box>


</Layout>

    </div>
  )
}

export default Usermaptype