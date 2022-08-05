import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
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
          <Stack direction="row" spacing={2}>
            <Button onClick={() => { navigate("/login") }} color="inherit">
              Login
            </Button>
            <Button onClick={() => { navigate("/register") }} color="inherit">
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar