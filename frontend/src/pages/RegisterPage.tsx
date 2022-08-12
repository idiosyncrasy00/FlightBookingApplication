import React from 'react'

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TextField, Button, Typography } from '@mui/material';

const styles = {
  containerSection: {
    display: `grid`,
    alignItems: `center`,
    justifyContent: `center`,
    margin: `5% 0 0 0`,
    padding: `0 1%`,
  },
};

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  })

  const handleClick = async (e) => {
    e.preventDefault();
    //dispatch({ type: "LOGIN_START" });
    console.log(registerForm);
    try {
      const res = await axios.post("http://localhost:8000/api/users/register", registerForm);
      console.log(res.data)
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err.message)
    }
  };
  const navigate = useNavigate()
  return (
    <div style={styles.containerSection}>
      <Typography variant="h5">Signup form</Typography>
      <TextField
        type="text"
        label="username"
        name="username"
        placeholder="username"
        value={registerForm.username}
        onChange={e => setRegisterForm({ ...registerForm, username: e.target.value })}
        variant="standard"
      />
      <br></br>
      <TextField
        type="email"
        label="email"
        name="email"
        placeholder="email"
        value={registerForm.email}
        onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
        variant="standard"
      />
      <br></br>

      <TextField
        type="text"
        label="phone"
        name="phone"
        placeholder="phone number"
        value={registerForm.phoneNumber}
        onChange={e => setRegisterForm({ ...registerForm, phoneNumber: e.target.value })}
        variant="standard"
      />
      <br></br>
      <TextField
        type="password"
        label="password"
        name="password"
        placeholder="password"
        value={registerForm.password}
        onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
        variant="standard"
      />
      <br></br>
      <Button color="inherit" variant="outlined" size="small" onClick={handleClick}>
        Sign Up
      </Button>
    </div>
  )
}

export default RegisterPage