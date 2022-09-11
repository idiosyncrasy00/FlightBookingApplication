import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import getCookie from '../utils/getCookie'
import { displayInfo } from '../redux/userInfoSlice'
import { useSelector, useDispatch } from 'react-redux'

import { LogoLayout } from '../components/Navbar.styles'

//import FlightIcon from '@mui/icons-material/Flight';

const Navbar = () => {
  const navigate = useNavigate()
  const username = useSelector((state) => state.userInfoReducer.user.username)
  const dispatch = useDispatch()
  const [auth, setAuth] = useState('');

  useEffect(() => {
    let setCookie = getCookie("access_token")
    setAuth(setCookie)
    if (auth !== null) {
      console.log(auth);
      console.log("Username is ", username)
    } else {
      dispatch(() => dispatch(displayInfo('')))
      //navigate('/');
    }
  }, [auth]);
  return (
    <AppBar style={{ position: 'fixed' }}>
      <Toolbar>
        {/* <IconButton onClick={() => { navigate("/") }}>
          <FlightIcon />
        </IconButton> */}
        <LogoLayout
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
          onClick={() => { window.location.href = "/" }
          }
        >
          <img src="../../public/logo.svg" width="60" height="43" style={{ boxSizing: 'border-box' }}></img>
          <span>VietnamBay</span>
        </LogoLayout>
        {username === undefined ? (
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
  )
}

export default Navbar