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

const styles = {
  paperContainer: {
    backgroundImage: `url(${paperImg})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `100% 100%`,
    width: `100vw`,
    minHeight: `100vh`,
    display: `flex`,
    alignItems: `center`
  },
  textContent: {
    color: `white`,
    flex: `1`,
    alignItems: `flex-start`,
    fontSize: `25px`,
    top: `50`
  },
  bodySection1: {
    display: `flex`,
    flexDirection: `row`,
    gap: `5% 5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  bodySection2: {
    display: `grid`,
    flexDirection: `column`,
    gap: `10%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  perfectCentering: {
    display: `grid`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  textCenter: {
    textAlign: "center",
  }
};

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
    backgroundColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: 'green',
  },
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CardLayouts = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    //backgroundColor: theme.palette.secondary.main,
    display: `grid`,
    gap: `5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    //backgroundColor: theme.palette.primary.main,
    display: `flex`,
    flexDirection: `row`,
    gap: `5% 5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  [theme.breakpoints.up('lg')]: {
    //backgroundColor: 'green',
    display: `flex`,
    flexDirection: `row`,
    gap: `5% 5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  //borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HomePage = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    console.log(getCookie("access_token"));
    setAuth(getCookie("access_token"))
  });
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div>
      {
        auth === null ? (
          <>
            <Paper style={styles.paperContainer}>
              <div className="text-content" style={styles.textContent}>
                <p>Book your flight now!</p>
                <Button onClick={() => { navigate('/register') }}>Sign up now!</Button>
              </div>
            </Paper>

            <Typography variant="h3" style={styles.textCenter}>Reviews</Typography>
            <CardLayouts>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="../assets/person.png"
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

              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="../assets/person.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hoang
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This app is great! I can get a flight ticket without spending times going to the airport!
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="../assets/person.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dang
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This app is great! I can get a flight ticket without spending times going to the airport!
                  </Typography>
                </CardContent>
              </Card>
            </CardLayouts>
            <Typography variant="h3" style={styles.textCenter}>Frequenly Asked Questions</Typography>
            <div style={styles.bodySection2}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Question 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Question 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Question 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

          </>
        ) : (<SecretPage />)
      }
    </div>
  )
}

export default HomePage