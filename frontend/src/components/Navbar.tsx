import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
    and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

const Navbar = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log(getCookie("access_token"));
    setAuth(getCookie("access_token"))
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
            Profile
          )
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar