import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import getCookie from '../utils/getCookie'
import { displayUsername, removeUsername } from '../redux/username'

const Navbar = () => {
  const navigate = useNavigate()
  const username = useSelector((state) => state.username.user)
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log(getCookie("access_token"));
    setAuth(getCookie("access_token"))
    console.log("Username is ", username)
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => { navigate("/") }}>
            fasdfasd
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            HanoiBay
          </Typography>
          {auth === null ? (
            <Stack direction="row" spacing={2}>
              <Button onClick={() => { navigate("/login") }} color="inherit">
                Login
              </Button>
              <Button onClick={() => { navigate("/register") }} color="inherit">
                Sign up
              </Button>
            </Stack>
          ) : (
            <Profile
              username={username}
            />
          )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar