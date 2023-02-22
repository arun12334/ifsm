import React from 'react'
import Layout from '../../../../components/layout'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CardContent } from '@mui/material'
import { Link } from 'react-router-dom';

const User=()=> {
  return (
    <div>
      <Layout>
      <Box className='map2'>
        <Link to="/manageusers">
<Button className='button' variant="contained" size='small'>Back</Button>  </Link>
<Card>
<CardContent>
 
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  /> 
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
        
      
        <TextField  
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

export default User