import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const styles = {
  containerSection: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `80%`,
    backgroundColor: `blue`,
  },
  leftSection: {

  },
  rightSection: {

  }
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    // <div style={styles.containerSection}>
    //   <div style={styles.leftSection}>
    //     abcd
    //   </div>
    //   <div style={styles.rightSection}>
    //     xyzd
    //   </div>
    // </div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
        style={styles.containerSection}
      >
        <Container maxWidth="sm">
          <div style={styles.leftSection}>
            abcd
          </div>
          <div style={styles.rightSection}>
            xyzd
          </div>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer