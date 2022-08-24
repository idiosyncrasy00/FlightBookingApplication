import React from 'react'
import { flightInterface } from '../interfaces/flightInterface'
import { useState, useEffect, useReducer } from 'react'

//modal import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField';
import Draggable from 'react-draggable';

type Props = {
  item: flightInterface;
  booking: () => void;
}

const styles = {
  centerText: {
    textAlign: `center`,
  },
  searchResult: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `3% 3%`,
    height: `20vh`
  },
};

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Result: React.FC<Props> = ({ item, booking }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + 1)
  };

  const handleDecrement = () => {
    if (counter < 0) {
      setCounter(0)
    }
    setCounter(prev => prev - 1)
  };

  const [peopleListInfo, setPeopleListInfo] = useState([]);

  // useEffect(() => {
  // } )
  return (
    <>
      <Box
        style={styles.searchResult}
        sx={{ boxShadow: 3 }}
      >
        <div>
          Img
        </div>
        <div>
          {item.brand}
        </div>
        <div>
          <span style={{ "padding-left": '5px' }}>{item.arrivalTime}</span>
          <br />
          <span>
            Ha Noi
          </span>
        </div>
        --
        <div>
          <span style={{ "padding-left": '5px' }}>
            {item.departureTime}
          </span>
          <br />
          <span>
            {item.destination}
          </span>
        </div>
        <div>
          {item.price} VND
        </div>
        <div>
          <Button
            // onClick={() => {
            // alert(JSON.stringify(item))
            // }}
            //onClick={() => booking()}
            onClick={handleClickOpen}
          >Book</Button>
        </div>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Flight Information
        </DialogTitle>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={handleDecrement}>-</Button>
          <Button disabled>{counter}</Button>
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
        <Button onClick={() => {
          //console.log(counter)
          sessionStorage.setItem('counter', counter)
        }}>Confirm</Button>
        <DialogContent>
          {item.price} VND
          <DialogContentText>
            From {item.arrivalTime} {item.arrivalDate} To {item.departureTime} {item.departureDate}
          </DialogContentText>
          <DialogContentText>
            Ha Noi - {item.destination}
          </DialogContentText>
        </DialogContent>

        <Grid container spacing={1} columns={12}>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Social Security Number" variant="outlined" />
          </Grid>
        </Grid>

        {(() => {
          // let counter = sessionStorage.getItem('counter');
          // counter = parseInt(counter)
          console.log(counter);
          //setCounter(counter)
          for (let i = 0; i < counter; i++) {
            return (
              <>
                <Grid container spacing={1} columns={12}>
                  <Grid item xs={4}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Social Security Number" variant="outlined" />
                  </Grid>
                </Grid>
              </>
            )
          }
        })()}

        <Grid container spacing={1} columns={12}>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Credit Card Number" variant="outlined" />
          </Grid>
        </Grid>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Confirm your order</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Result