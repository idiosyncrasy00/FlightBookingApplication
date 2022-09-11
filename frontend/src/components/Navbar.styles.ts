import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';


export const LogoLayout = styled(Typography)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('xs')]: {
    paddingTop: '12px',
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    paddingTop: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '5px',
  },
}));

