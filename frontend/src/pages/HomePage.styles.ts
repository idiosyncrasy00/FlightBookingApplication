//mui import
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import paperImg from '../assets/254367.webp'
import Card from '@mui/material/Card';


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
  display: `flex`,
  alignItems: `center`,
  width: `100vw`,
  [theme.breakpoints.up('xs')]: {
    minHeight: `100vh`,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    minHeight: `70vh`,
  },
  [theme.breakpoints.up('lg')]: {

  },
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
    padding: `15px 0 25px 0`,
  }
};

export const TextContentInBG = styled('div')(({ theme }) => ({
  color: `white`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  padding: `0 0 0 10px`,
  fontSize: `25px`,
  fontWeight: `bold`,
  textAlign: `center`,
  lineHeight: `1.3`,
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    width: '45%',
    padding: `0 0 13% 1%`
  },
  [theme.breakpoints.up('lg')]: {
    width: '30%',
    padding: `0 0 7% 5%`
  },
}));

export const CardLayouts = styled('div')(({ theme }) => ({
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
    gap: `10%`,
  },
}));

export const CardLayout = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '90%',
    padding: '5%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '25%',
    padding: 0,
  },
  // [theme.breakpoints.up('lg')]: {

  // },
}));