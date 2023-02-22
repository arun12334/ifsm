import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
 
 
 
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
 
import Stack from '@mui/material/Stack';
import { CardContent } from '@mui/material'
 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Card>
<CardContent>


<TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
        <CardContent>
        </CardContent>
        <TextField id="outlined-basic" label="Type Here" variant="outlined" size='small'  />
        <Stack spacing={2} direction="row">
        <Button variant="outlined" size='small'>Clear</Button>  
      <Button variant="contained">Update</Button>
     
    </Stack>
        </CardContent>


</Card>
        </Box>
      </Modal>
    </div>
  );
}