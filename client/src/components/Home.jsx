import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './Header';
import Ether from './Ether';
import Web3 from 'web3'

const jsonInterface = require('../constants/contractABI.json');
var Contract = require('web3-eth-contract');

const address = '0x0165878A594ca255338adfa4d48449f69242Eb8F';

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
    Contract.setProvider('http://127.0.0.1:8545/');
    const contract = new Contract(jsonInterface, address);
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