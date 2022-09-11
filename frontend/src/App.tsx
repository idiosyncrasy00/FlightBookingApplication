import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './router/route'
import { Fragment } from 'react';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react'
// import LinearProgress from '@mui/material/LinearProgress';


let theme = createTheme();

theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h4 = {
  fontWeight: '100',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.8rem',
  },
};

function App() {
  //const [count, setCount] = useState(0)

  // const [progress, setProgress] = useState(0);
  // useEffect(() => {

  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <>
      {/* <LinearProgress variant="determinate" value={progress} /> */}
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <div className="App">
            <Routes>
              {
                routes.map((route) => {
                  return (
                    <Fragment>
                      <Route path={route.path} element={route.component}></Route>
                    </Fragment>
                  );
                })
              }
            </Routes>
          </div>
        </ThemeProvider>
        <Footer />
      </Router >
    </>
  )
}

export default App
