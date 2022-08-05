import React from 'react'
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
  return (
    <div style={styles.containerSection}>
      <Typography variant="h5">Signup form</Typography>
      <TextField
        type="text"
        label="username"
        name="username"
        placeholder="username"
        variant="standard"
      />
      <br></br>
      <TextField
        type="email"
        label="email"
        name="email"
        placeholder="email"
        variant="standard"
      />
      <br></br>

      <TextField
        type="text"
        label="phone"
        name="phone"
        placeholder="phone number"
        variant="standard"
      />
      <br></br>
      <TextField
        type="password"
        label="password"
        name="password"
        placeholder="password"
        variant="standard"
      />
      <br></br>

      <TextField
        type="password"
        label="confirmPassword"
        name="confirmPassword"
        placeholder="password"
        variant="standard"
      />
      <br></br>
      <Button color="inherit" variant="outlined" size="small">
        Sign Up
      </Button>
    </div>
  )
}

export default RegisterPage