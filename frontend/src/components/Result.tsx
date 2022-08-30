import React, { useRef } from 'react'
import { FlightInterface } from '../interfaces/flightInterface'
import { useState, useEffect, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { displayInfo } from '../redux/userInfoSlice'
import axios from 'axios'
import headerConfig from '../adapters/headerConfig'

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

import { useReactToPrint } from 'react-to-print'

type Props = {
  item: FlightInterface;
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
            {item.from}
          </span>
        </div>
        --
        <div>
          <span style={{ "padding-left": '5px' }}>
            {item.departureTime}
          </span>
          <br />
          <span>
            {item.to}
          </span>
        </div>
        <div>
          {item.price} VND
        </div>
        <div>
          <Button
            onClick={() => handleClickOpen(item.id)}
          >Book</Button>
        </div>
      </Box>
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