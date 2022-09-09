import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  })

  const [error, setError] = useState('')

  const handleClick = async (e: unknown) => {
    e.preventDefault();
    console.log(registerForm);
    if (registerForm.username === '' || registerForm.password === '' || registerForm.email === '' || registerForm.phoneNumber === '') {
      setError("Field is not allowed to be empty")
    }
    try {
      const res = await axios.post("http://localhost:8000/api/users/register", registerForm);
      console.log(res.data)
      navigate("/login")
    } catch (err) {
      console.log(err.response)
      setError(err.response.data.error)
    }
  };
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: `40%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <div style={{ color: "red", fontSize: "13px" }}>{error}</div>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              //autoComplete="username"
              autoFocus
              value={registerForm.username}
              onChange={e => setRegisterForm({ ...registerForm, username: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              value={registerForm.email}
              onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
            //autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoFocus
              value={registerForm.phoneNumber}
              onChange={e => setRegisterForm({ ...registerForm, phoneNumber: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={registerForm.password}
              onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}