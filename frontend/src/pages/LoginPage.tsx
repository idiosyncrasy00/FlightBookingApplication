import React from 'react'

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
//import library  
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

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const { loading, error } = useContext(AuthContext);

  const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setAuth((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    //dispatch({ type: "LOGIN_START" });
    console.log(loginForm);
    try {
      const res = await axios.post("http://localhost:8000/api/users/login", loginForm);
      console.log(res.data.details)
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate("/")
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err.message)
    }
  };
  return (
    <div style={styles.containerSection}>
      <Typography variant="h5">Signin form</Typography>
      <TextField
        label="username"
        name="username"
        placeholder="username"
        value={loginForm.username}
        onChange={e => setLoginForm({...loginForm, username: e.target.value})}
        variant="standard"
      />
      <br></br>
      <TextField
        label="password"
        name="password"
        type="password"
        placeholder="password"
        value={loginForm.password}
        onChange={e => setLoginForm({...loginForm, password: e.target.value})}
        variant="standard"
      />
      <br></br>
      <Button disabled={loading} onClick={handleClick} color="inherit" variant="outlined" size="small">
        Submit task
      </Button>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default LoginPage