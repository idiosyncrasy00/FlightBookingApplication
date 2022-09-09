import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { displayInfo } from '../redux/userInfoSlice'

const theme = createTheme();

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [error, setError] = useState('')

  //const { loading, error } = useContext(AuthContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = async (e) => {
    e.preventDefault();
    if (loginForm.username === '' || loginForm.password === '') {
      setError("Field is not allowed to be empty")
    }
    try {
      const res = await axios.post("http://localhost:8000/api/users/login", loginForm, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.data)
      dispatch(() => dispatch(displayInfo({
        _id: res.data.details._id,
        username: res.data.details.username,
        phoneNumber: res.data.details.phoneNumber,
        email: res.data.details.email,
      })))
      navigate("/")
    } catch (err) {
      console.log(err.response)
      setError(err.response.data)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: `50%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
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
              autoComplete="username"
              onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
              value={loginForm.username}
              autoFocus
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
              onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
              value={loginForm.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

              onClick={handleClick}
              color="primary"
            >
              Sign In
            </Button>
            <Grid item>
              <Link
                onClick={() => {
                  navigate('/register');
                }}
                underline={'hover'}
                //href=""
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}