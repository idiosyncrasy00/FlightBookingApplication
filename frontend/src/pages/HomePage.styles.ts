//mui import
import { styled } from '@mui/material/styles';
import { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import paperImg from '../assets/254367.webp'


export const Layout = styled('div')(({ theme }) => ({
  display: `flex`,
  flexDirection: 'column',
  alignItems: `center`,
  justifyContent: `center`,
  // textAlign: 'center',
  gap: `25px`,
}))

export const PaperContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${paperImg})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100% 100%`,
  width: `100vw`,
  minHeight: `100vh`,
  display: `flex`,
  alignItems: `center`
}))

export const styles = {
  textContent: {
    color: `white`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    fontSize: `25px`,
    padding: `0 0 0 10px`
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
  headingStyle: {
    textAlign: "center",
    padding: `0 0 25px 0`,
  }
};

// const Accordion = styled((props: AccordionProps) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
//   width: '90%',
//   [theme.breakpoints.up('xs')]: {
//     margin: '0 5% 0 5%',
//   },
//   [theme.breakpoints.up('sm')]: {
//     margin: '0 5% 0 5%',
//   },
//   [theme.breakpoints.up('lg')]: {
//     margin: '0 5% 0 5%',
//   },
// }));

// export const AccordionSummary = styled((props: AccordionSummaryProps) => (
//   <MuiAccordionSummary
//     { ...props }
//   />
// ))(({ theme }) => ({
//     backgroundColor: 'lightgrey',
//     flexDirection: 'row-reverse',
//   }));

// export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   [theme.breakpoints.up('xs')]: {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: 'green',
//   },
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

export const CardLayouts = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    //backgroundColor: theme.palette.secondary.main,
    display: `grid`,
    gap: `5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
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

export const FAQLayout = styled('div')(({ theme }) => ({
  display: `grid`,
  alignItems: `center`,
  justifyContent: `center`,
  textAlign: 'center',
  maxWidth: `100%`,
  [theme.breakpoints.up('xs')]: {
    // minHeight: `200vh`,
    maxHeight: `240vh`,
    margin: `10% 0 10% 0`,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    maxHeight: `135vh`,
    margin: `0% 0 10% 0`,
  },
  [theme.breakpoints.up('lg')]: {
    maxHeight: `135vh`,
    margin: `0% 0 10% 0`,
    gap: `10%`
  },
}));