import React, { useEffect, useState } from 'react'
import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'
import getCookie from '../utils/getCookie'
import SecretPage from '../pages/SecretPage'

//mui import
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
//import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux'
import { displayInfo } from '../redux/userInfoSlice'

import {
  Layout,
  PaperContainer,
  styles,
  //Accordion,
  //AccordionSummary,
  CardLayouts,
  FAQLayout,
  TextContentInBG
} from './HomePage.styles'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  width: '90%',
  [theme.breakpoints.up('xs')]: {
    margin: '0 5% 0 5%',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '0 5% 0 5%',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0 5% 0 5%',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'lightgrey',
  flexDirection: 'row-reverse',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'lightgray',
  },
  [theme.breakpoints.up('md')]: {
    //backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('lg')]: {
    //backgroundColor: 'green',
  },
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HomePage = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(null);
  //const username = useSelector((state) => state.userInfoReducer.user.username)
  //const dispatch = useDispatch()

  useEffect(() => {
    console.log(getCookie("access_token"));
    setAuth(getCookie("access_token"))
  }, []);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box sx={{ width: '100%' }}>
      {/* <LinearProgress variant="determinate" value={progress} /> */}
      {
        auth === null ? (
          <>
            <Layout>
              <PaperContainer>
                <TextContentInBG>
                  <p>Book your flight to anywhere in Vietnam now!</p>
                  <Button
                    variant="contained"
                    onClick={() => { navigate('/register') }}>Sign up now!</Button>
                </TextContentInBG>
              </PaperContainer>
              <div>
                <Typography variant="h3" style={styles.headingStyle}>Reviews from our users</Typography>
                <CardLayouts>
                  <Card sx={{ width: '25%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="../../public/person1.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Hai
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This app is great! I can get a flight ticket without spending times going to the airport!
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card sx={{ width: '25%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="../../public/person2.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Linh
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a website where I can reserve a flight ticket for multiple people. Thanks VietnamBay!
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ width: '25%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="../../public/person3.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dang
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Best website for flight reservation! Definitely will recommend this to my friends.
                      </Typography>
                    </CardContent>
                  </Card>
                </CardLayouts>
              </div>
              <FAQLayout>
                <Typography variant="h3" style={styles.headingStyle}>Frequenly Asked Questions</Typography>
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  style={{ textAlign: `left` }}
                >
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant="h4"><span>+ </span>Question 1: What is VietnamBay?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ paddingLeft: `32px` }}>
                      <b>Answer:</b> VietnamBay is a website for people booking a domestic flight in Vietnam online.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                  style={{ textAlign: `left` }}
                >
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography variant="h4"><span>+ </span>Question 2: How can you book a flight here?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ paddingLeft: `32px` }}>
                      <b>Answer:</b> You need to get an account. If you have not had an account yet, go sign up here.
                      Once get an account, you login to the page and choose a flight you wish.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                  style={{ textAlign: `left` }}
                >
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography variant="h4"><span>+ </span> Question 3: What types of payment method is accepted?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ paddingLeft: `32px` }}>
                      <b>Answer:</b> We currently accept credit cards distributed by Vietnamese Banks.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </FAQLayout>
            </Layout>
          </>
        ) : (<SecretPage />)
      }
    </Box>
  )
}

export default HomePage