import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Ether from './Ether';
import Web3 from 'web3'

const jsonInterface = require('../constants/contractABI.json');
var Contract = require('web3-eth-contract');

const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

const Home = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    loadBlockChain();
  }, []);

  const loadBlockChain = async() => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    Contract.setProvider('http://127.0.0.1:8545/');
    var contract = new Contract(jsonInterface, address);

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