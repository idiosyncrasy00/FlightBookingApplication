import React from 'react'
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
  return (
    <div style={styles.containerSection}>
      <Typography variant="h5">Signin form</Typography>
      <TextField
        label="username"
        name="username"
        placeholder="username"
        variant="standard"
      />
      <br></br>
      <TextField
        label="password"
        name="password"
        placeholder="password"
        variant="standard"
      />
      <br></br>
      <Button color="inherit" variant="outlined" size="small">
        Submit task
      </Button>
    </div>
  )
}

export default LoginPage