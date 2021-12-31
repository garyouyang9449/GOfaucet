import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Ether from './Ether';


const Home = () => {

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Ether />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;