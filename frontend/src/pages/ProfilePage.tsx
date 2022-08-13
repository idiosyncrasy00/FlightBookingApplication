import React, { useState, useEffect } from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { displayInfo } from '../redux/userInfoSlice'

const theme = createTheme();

const ProfilePage = () => {

  const userInfo = useSelector((state) => state.userInfoReducer.user)
  const [info, setInfo] = useState(userInfo)
  useEffect(() => {
    // setInfo(userInfo)
    console.log(info)
  }, [info]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Profile Information
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="username"
                  value={info.username}
                  onChange={e => setInfo({ ...info, username: e.target.value })}
                  autoFocus
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={info.email}
                  onChange={e => setInfo({ ...info, email: e.target.value })}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="phoneNumber"
                  value={info.phoneNumber}
                  onChange={e => setInfo({ ...info, phoneNumber: e.target.value })}
                  type="text"
                  id="phoneNumber"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={async () => {
                try {
                  const res = await axios.put("http://localhost:8000/api/users/update", info, {
                    withCredentials: true,
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                  console.log(res.data)
                  dispatch(() => dispatch(displayInfo(info)))
                  navigate("/me")
                } catch (err) {
                  console.log(err.message)
                }
              }}
            >
              Update
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default ProfilePage