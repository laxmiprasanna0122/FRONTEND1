import { Box, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import userService from '../services/user.service';
import Message from "./Message";
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
const TransactionFormAccountNumber = ({setShowModal,setShowAccountNumberModel}) => {

    const [showError,setShowError]=useState(false);
    const navigate = useNavigate();
    const [emailReceiver,setEmailReceiver]=useState("");
    const emailSender=JSON.parse(localStorage.getItem("email"));
    const [amount,setAmount]=useState(0)

  
    async function submitHandler() { 
        userService.createTransaction({emailSender,emailReceiver,amount}).then(response=>{
          toast.success(response.data.message);
                setShowModal(false);
                navigate("/home")
            
            
        }   
        )
        .catch((e)=>{
          toast.error(e.response.data.message);
            setShowError(true);
        }
        )

    }

  return (
    <div>
    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Transfer Amount</h1>

 
    <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Account Number"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailReceiver} onChange={(e)=>setEmailReceiver(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="amount"
              label="amount"
              type="number"
              id="password"
              autoComplete="current-password"
              value={amount} onChange={(e)=>setAmount(e.target.value)}

            />
           
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandler}
>
              Submit
            </Button>

       
            <Button onClick={()=>{setShowAccountNumberModel(false)}}>Transfer by email </Button>


          </Box>

  </div>

      )
}

export default TransactionFormAccountNumber
