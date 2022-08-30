import React, { useRef } from 'react'
import { FlightInterface } from '../interfaces/flightInterface'
import { useState, useEffect, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayInfo } from '../redux/userInfoSlice'
import axios from 'axios'
import headerConfig from '../adapters/headerConfig'
import Divider from "@mui/material/Divider";

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


import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useReactToPrint } from 'react-to-print'
import Typography from '@mui/material/Typography';

const BoxLayout = styled(Paper)(({ theme }) => ({
  //width: `80vw`,
  [theme.breakpoints.down('sm')]: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    textAlign: `center`,
    gap: `1%`,
    maxHeight: `60vh`,
    width: `90vw`
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    // display: `flex`,
    // alignItems: `center`,
    // justifyContent: `center`,
    // gap: `3% 3%`,
    // height: `20vh`,
    display: `flex`,
    //flexWrap: `nowrap`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `0 3%`,
    height: `20vh`,
    width: '100vw',
  },
  [theme.breakpoints.up('lg')]: {
    display: `flex`,
    // flexWrap: `nowrap`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `0 3%`,
    height: `20vh`,
    width: '80vw',
  },
  border: '1px solid rgba(0, 0, 0, .125)',
}));

const BoxChild1 = styled('div')(({ theme }) => ({
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

const BoxChild2 = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {
    width: `10%`,
    // marginLeft: `15px`,
    textAlign: `center`,
  },
  [theme.breakpoints.up('lg')]: {
    width: `10%`,
    // marginLeft: `15px`,
    textAlign: `center`,
  },
}));

const BoxChild3 = styled('div')(({ theme }) => ({
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

const BoxChild4 = styled('div')(({ theme }) => ({
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

const BoxChild5 = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {

  },
  [theme.breakpoints.up('sm')]: {

  },
  [theme.breakpoints.up('lg')]: {

  },
}));

type Props = {
  item: FlightInterface;
  booking: () => void;
}

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

let initialValue = 1

const counterReducer = (state = 0, action: unknown) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const Modal = React.forwardRef((props, ref) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Flight Information
      </DialogTitle>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={props.handleDecrement}>-</Button>
        <Button disabled>{props.counter}</Button>
        <Button onClick={props.handleIncrement}>+</Button>
        <Button onClick={props.printToPDF}>Print to PDF</Button>
      </ButtonGroup>
      <div ref={ref}>
        <DialogContent>
          {props.price} VND
          <DialogContentText>
            From {props.arrivalTime} {props.arrivalDate} To {props.departureTime} {props.departureDate}
          </DialogContentText>
          <DialogContentText>
            {props.from} - {props.to}
          </DialogContentText>
          <DialogContentText>
            Total price: {props.price * (props.counter)}
          </DialogContentText>
        </DialogContent>

        <Grid container spacing={1} columns={12}>
          <Grid item xs={4}>
            <TextField id={`first-name-0`} label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id={`last-name-0`} label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id={`ssn-0`} label="Social Security Number" variant="outlined" />
          </Grid>
        </Grid>

        {(() => {
          console.log(props.counter);
          let arr = [];
          for (let i = 1; i < props.counter; i++) {
            arr.push(
              <>
                <Grid container spacing={1} columns={12}>
                  <Grid item xs={4}>
                    <TextField id={`first-name-${i}`} label="First Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id={`last-name-${i}`} label="Last Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id={`ssn-${i}`} label="Social Security Number" variant="outlined" />
                  </Grid>
                </Grid>
              </>
            )
          }
          return arr
        })()}

        <Grid container spacing={1} columns={12}>
          <Grid item xs={4}>
            <TextField id="email" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="bank-name" label="Bank Name" variant="outlined" />
          </Grid>
          <Grid item xs={4}>
            <TextField id="credit-card" label="Credit Card Number" variant="outlined" />
          </Grid>
        </Grid>
      </div>
      <DialogActions>
        <Button autoFocus onClick={props.handleClose}>
          Cancel
        </Button>
        <Button onClick={props.submitFlightForm}>Confirm your order</Button>
      </DialogActions>
    </Dialog>
  )
})

const Result: React.FC<Props> = ({ item, booking }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (id: string) => {
    console.log(id)
    setChosenFlightID(id)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [counter, dispatch] = useReducer(counterReducer, initialValue);
  const [chosenFlightID, setChosenFlightID] = useState('' as string);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" })
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" })
  };

  const userId = useSelector((state) => state.userInfoReducer.user._id)
  // id: string
  const submitFlightForm = async () => {
    let formArr = [];
    //insert payment api here
    let bankName = (document.getElementById(`bank-name`) as HTMLInputElement).value
    let creditCardNumber = (document.getElementById(`credit-card`) as HTMLInputElement).value
    let paymentDetails = {
      amount: item.price * (counter),
      bankName: bankName,
      creditCard_number: creditCardNumber,
      flight_id: chosenFlightID,
      user_id: userId
    }

    console.log(paymentDetails)

    let paymentApi = await axios.post('http://localhost:8000/api/payments/insert', paymentDetails, headerConfig)
    console.log(paymentApi)
    //insert booking api here
    for (let i = 0; i < counter; i++) {
      let firstName = (document.getElementById(`first-name-${i}`) as HTMLInputElement).value
      let lastName = (document.getElementById(`last-name-${i}`) as HTMLInputElement).value
      let ssn = (document.getElementById(`ssn-${i}`) as HTMLInputElement).value
      //console.log(firstName, lastName, ssn);
      formArr.push({
        first_name: firstName,
        last_name: lastName,
        social_security_id: ssn,
        payment_id: paymentApi.data._id,
      })
    }
    console.log("Successfully booked a flight with id ", chosenFlightID)
    console.log(formArr)

    let bookingParam = {
      _id: chosenFlightID,
      list_of_passengers: formArr
    }

    let bookingFlightApi = await axios.put('http://localhost:8000/api/utils/booked', bookingParam, headerConfig);

    console.log(bookingFlightApi)
    setOpen(false);
  }

  const pdfRef = useRef();

  const printToPDF = useReactToPrint({
    content: () => pdfRef.current,
  })

  return (
    <>
      <BoxLayout>
        <BoxChild1>
          {/* { "background-color": "green" } */}
          <img src={item.image} width="50" height="50"></img>
        </BoxChild1>
        <BoxChild2>
          <Typography sx={{ fontWeight: 'bold' }}>{item.brand}</Typography>
        </BoxChild2>
        <BoxChild4>
          <BoxChild3>
            <span style={{ "font-weight": "bold" }}>{item.arrivalTime}</span>
            <br />
            <span>
              {item.from}
            </span>
          </BoxChild3>
          <Divider style={{ backgroundColor: "gray", width: '1%' }} />
          <BoxChild3>
            <div>
              <span style={{ "font-weight": "bold" }}>
                {item.departureTime}
              </span>
              <br />
              <span>
                {item.to}
              </span>
            </div>
          </BoxChild3>
        </BoxChild4>
        <div style={{ "font-weight": "bold" }}>
          {item.price} VND
        </div>
        <BoxChild5>
          <Button
            onClick={() => handleClickOpen(item.id)}
          >Book</Button>
        </BoxChild5>
        {/* </Box> */}
      </BoxLayout>
      <Modal
        ref={pdfRef}
        open={open}
        handleClose={handleClose}
        handleDecrement={handleDecrement}
        counter={counter}
        handleIncrement={handleIncrement}
        price={item.price}
        arrivalTime={item.arrivalTime}
        arrivalDate={item.arrivalDate}
        departureTime={item.departureTime}
        departureDate={item.departureDate}
        from={item.from}
        to={item.to}
        submitFlightForm={submitFlightForm}
        printToPDF={printToPDF}
      />
    </>
  )
}

export default Result