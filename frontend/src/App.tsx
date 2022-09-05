import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './router/route'
import { Fragment } from 'react';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();

theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: '1.2rem',
  [theme.breakpoints.up('xs')]: {

  },
  [theme.breakpoints.between('sm', 'md')]: {

  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2rem',
  // },
};

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
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
