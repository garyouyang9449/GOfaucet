import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Ether from './Ether';
import Web3 from 'web3'

const abi = require('../constants/contractABI.json');

const address = '0x47f1DEd8fE2bd2c14fccDA86C1b8A85dCA523916';

const Home = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState({});

  useEffect(() => {
    loadBlockChain();
  }, []);

  useEffect(() => {
    console.log("contract", contract)
  }, [contract]);

  const loadBlockChain = async() => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    await window.ethereum.enable();

    const contract = new web3.eth.Contract(abi, address)
    const accounts = await web3.eth.getAccounts();
  
    setContract({ ...contract })
    setAccount(accounts[0]);
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Ether account={account} contract={contract} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;