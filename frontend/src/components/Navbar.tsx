import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import getCookie from '../utils/getCookie'
import { displayInfo } from '../redux/userInfoSlice'
import { useSelector, useDispatch } from 'react-redux'

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
    } else if (auth === null) {
      alert("You're logged out")
      // dispatch(() => dispatch(removeUsername('')))
      dispatch(() => dispatch(displayInfo({})))
      navigate('/');
      //window.location.href = '/'
    }
  }, [auth]);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => { navigate("/") }}>
            fasdfasd
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            VietnamBay
          </Typography>
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
    </div>
  )
}

export default Navbar