import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const Ether = () => {
  const [address, setAddress] = useState('');

  const onChange = (event) => {
    setAddress(event.target.value);
  }

  const onClick = () => {
    
  }

  return (
    <Grid container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Enter your testnet account address
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField
            fullWidth
            label="Enter your testnet account address"
            onChange={onChange}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Send me test Ether</Button>
      </Grid>
    </Grid>
  )
}

export default Ether;