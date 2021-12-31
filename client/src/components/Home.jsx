import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Ether from './Ether';
import Web3 from 'web3'

const Home = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    loadBlockChain();
  }, []);

  const loadBlockChain = async() => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    const accounts = await web3.eth.getAccounts();
    setAccount({ account: accounts[0] });
  }

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