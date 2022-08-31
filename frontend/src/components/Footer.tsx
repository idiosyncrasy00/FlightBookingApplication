import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { styled } from '@mui/material/styles';

const DivLayout = styled('div')(({ theme }) => ({
  //width: `80vw`,
  [theme.breakpoints.up('xs')]: {
    // marginTop: `40%`,
    textAlign: 'center',
    flexDirection: 'column',
    height: '10vh',
  },
  [theme.breakpoints.up('lg')]: {
    // marginTop: `10%`,
  },
}));

const styles = {
  containerSection: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `80%`,
    backgroundColor: `rgb(25, 118, 210)`,
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
    <DivLayout>
      {/* <CssBaseline /> */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
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
    </DivLayout>
  )
}

export default Footer