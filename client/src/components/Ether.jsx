import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const Ether = ({ account, contract }) => {
  const [address, setAddress] = useState('');

  const onChange = (event) => {
    setAddress(event.target.value);
  }

  const onClick = async () => {
    const before = await contract.methods.getAmount().call();

    await contract.methods.setAmount('5000000000000000000').call();

    const after = await contract.methods.getAmount().call();

    console.log(before, after)
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
        <Button variant="contained" onClick={onClick}>Send me test Ether</Button>
      </Grid>
    </Grid>
  )
}

export default Ether;