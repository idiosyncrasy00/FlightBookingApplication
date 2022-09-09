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
  iconSection: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `2%`,
    paddingBottom: `2%`
  },
  textSection: {
    
  }
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © VietnamBay || All rights reserved || '} {new Date().getFullYear()}
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
          <div style={styles.iconSection}>
            <img src="../../public/github.svg" width="30" height="30" />
            <img src="../../public/facebook.svg" width="30" height="30" />
            <img src="../../public/instagram.svg" width="30" height="30" />
            <img src="../../public/twitter.svg" width="30" height="30" />
          </div>
          <div style={styles.textSection}>
            Website made by Duc Hoang - 19020098
          </div>
          <Copyright />
        </Container>
      </Box>
    </DivLayout>
  )
}

export default Footer