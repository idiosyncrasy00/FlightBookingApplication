
import Paper, { PaperProps } from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DialogContentText from '@mui/material/DialogContentText';

export const BoxLayout = styled(Paper)(({ theme }) => ({
  margin: `2%`,
  [theme.breakpoints.up('xs')]: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    textAlign: `center`,
    // gap: `1%`,
    maxHeight: `60vh`,
    width: `90vw`
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `0 3%`,
    height: `20vh`,
    width: '80vw',
  },
  [theme.breakpoints.up('lg')]: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `0 3%`,
    height: `20vh`,
    width: '80vw',
  },
  border: '1px solid rgba(0, 0, 0, .125)',
}));

export const BoxChild1 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {
    width: `10%`,
    textAlign: `center`,
  },
  [theme.breakpoints.up('lg')]: {
    width: `10%`,
    textAlign: `center`,
  },
}));

export const BoxChild2 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {
    width: `10%`,
    textAlign: `center`,
  },
  [theme.breakpoints.up('lg')]: {
    width: `10%`,
    textAlign: `center`,
  },
}));

export const BoxChild3 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {

  },
  [theme.breakpoints.up('lg')]: {
    width: `50%`,
    textAlign: `center`,
  },
}));

export const BoxChild4 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {

  },
  [theme.breakpoints.up('lg')]: {
    display: `flex`,
    flexWrap: 'no-wrap',
    width: `40%`,
    // gap: `5% 5%`,
    textAlign: `center`,
  },
}));

export const BoxChild5 = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {

  },
  [theme.breakpoints.up('lg')]: {

  },
}));

//Modal layout
export const ModalLayout = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {

  },
  [theme.breakpoints.between('sm', 'lg')]: {
    display: `flex`,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    display: `flex`,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const FormModalLayout = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `20px 10px`,
  },
  [theme.breakpoints.up('sm')]: {
    padding: `20px 10px`,
  },
  [theme.breakpoints.up('lg')]: {
    // display: `flex`,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    padding: `20px 10px`,
  },
}));

export const GridLayout = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: `10px 10px`,
  },
  [theme.breakpoints.up('sm')]: {
    padding: `10px 10px`,
  },
  [theme.breakpoints.up('lg')]: {
    padding: `5px 10px`,
  },
}));

export const DialogContentTextLayout = styled(DialogContentText)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    //float: `left`,
    gap: `5%`
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    //float: `left`,
    gap: `5%`
  },
  [theme.breakpoints.up('lg')]: {
    display: `flex`,
    flexDirection: `collumn`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `5%`
  },

  // [theme.breakpoints.up('xs')]: {
  //   display: `flex`,
  //   flexDirection: `row`,
  //   justifyContent: `flex-start`,
  //   alignItems: `flex-start`,
  //   //float: `left`,
  //   gap: `5%`
  // },
  // [theme.breakpoints.up('lg')]: {
  //   display: `flex`,
  //   flexDirection: `collumn`,
  //   justifyContent: `center`,
  //   alignItems: `center`,
  //   gap: `5%`
  // },
}));

export const styles = {
  perfectCentering: {
    display: `grid`,
    justifyContent: `center`,
    alignItems: `center`,
  },
};

