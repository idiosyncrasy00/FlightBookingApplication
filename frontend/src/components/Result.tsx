import { FlightInterface } from '../interfaces/flightInterface'
import React, { useState, useReducer, useRef } from 'react'
import { useSelector } from 'react-redux'
//import { displayInfo } from '../redux/userInfoSlice'
import axios from 'axios'
import headerConfig from '../adapters/headerConfig'
import Divider from "@mui/material/Divider";

//mui import
//import Box from '@mui/material/Box';
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
//import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ReactToPrint from 'react-to-print'
import Typography from '@mui/material/Typography';

import numberWithCommas from '../utils/setDotsInNumber'

import {
  BoxLayout,
  BoxChild1,
  BoxChild2,
  BoxChild3,
  BoxChild4,
  BoxChild5,
  ModalLayout,
  FormModalLayout,
  GridLayout,
  DialogContentTextLayout
} from './Result.styles'

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
      <Paper {...props}
        style={{
          width: '120% !important',
        }}
      />
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

const Modal = (props, ref) => {
  const pdfRef = useRef(null);
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <ModalLayout>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" style={{ textAlign: 'center' }}>
          <b>
            Flight Information
          </b>
        </DialogTitle>
        <ButtonGroup size="small" aria-label="small outlined button group"
          style={{
            display: `flex`,
            flexDirection: `collumn`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Button onClick={props.handleDecrement}>-</Button>
          <Button disabled><b>{props.counter}</b></Button>
          <Button onClick={props.handleIncrement}>+</Button>
          {/* <Button onClick={printToPDF}>Print to PDF</Button> */}

          <ReactToPrint
            trigger={() => <Button>Print to PDF</Button>}
            content={() => pdfRef.current}
          />
        </ButtonGroup>
        <div ref={pdfRef}>
          <DialogContent>
            <img src={props.image} width="40" height="40" />
            <DialogContentText style={{ fontSize: `24px` }}>
              <b>{props.from} - {props.to}</b>
            </DialogContentText>
            <DialogContentTextLayout>
              <div>
                <img src="../../public/plane_start.png" width="24" height="24" />
                <br />
                <b>{props.departureTime + " at " + props.from}</b>
              </div>
              <div>
                <img src="../../public/plane_end.png" width="24" height="24" />
                <br />
                <b>{props.arrivalTime + " at " + props.to}</b>
              </div>
            </DialogContentTextLayout>
            <DialogContentText>
              <b>Departure Date: {props.departureDate}</b>
            </DialogContentText>
            <DialogContentText>
              <b>Ticket price: {numberWithCommas(props.price)} VND/Person</b>
            </DialogContentText>
          </DialogContent>
          <DialogContentText style={{ float: 'right', paddingRight: `19px` }}>
            <b>TOTAL PRICE: {numberWithCommas(props.price * (props.counter))} VND</b>
          </DialogContentText>
          <FormModalLayout>
            <div style={{ textAlign: 'start', paddingLeft: '10px', }}><b>Person 1</b></div>
            <GridLayout container spacing={1} columns={12}>
              <Grid item xs={12} sm={4}>
                <TextField id={`first-name-0`} fullWidth label="First Name" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id={`last-name-0`} fullWidth label="Last Name" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id={`ssn-0`} fullWidth label="Social Security Number" variant="outlined" size="small" />
              </Grid>
            </GridLayout>
            {(() => {
              console.log(props.counter);
              let arr = [];
              //let arr1 = []
              for (let i = 1; i < props.counter; i++) {
                arr.push(
                  <>
                    <div style={{ textAlign: 'start', paddingLeft: '10px', }}><b>Person {i + 1}</b></div>
                    <GridLayout container spacing={1} columns={12}>
                      <Grid item xs={12} sm={4}>
                        <TextField id={`first-name-${i}`} fullWidth label="First Name" variant="outlined" size="small"
                        />
                        {/* {
                        (document.getElementById(`first-name-${i}`) as HTMLInputElement).value} */}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField id={`last-name-${i}`} fullWidth label="Last Name" variant="outlined" size="small" />
                        {/* {(document.getElementById(`last-name-${i}`) as HTMLInputElement).value} */}
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField id={`ssn-${i}`} fullWidth label="Social Security Number" variant="outlined" size="small" />
                        {/* {(document.getElementById(`ssn-${i}`) as HTMLInputElement).value} */}
                      </Grid>
                    </GridLayout>
                  </>
                )
              }
              return arr
            })()}
            <div style={{ textAlign: 'start', paddingLeft: '10px', }}><b>Contact and payments</b></div>
            <GridLayout container spacing={1} columns={12}>
              <Grid item xs={12} sm={4}>
                <TextField id="email" fullWidth label="Email" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="bank-name" fullWidth label="Bank Name" variant="outlined" size="small" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField id="credit-card" fullWidth label="Credit Card Number" variant="outlined" size="small" />
              </Grid>
            </GridLayout>
          </FormModalLayout>
        </div >
      </ModalLayout >
      <DialogActions>
        <Button
          variant="standard"
          onClick={props.handleClose}
          size="small"
        >
          Cancel
        </Button>
        <Button
          onClick={props.submitFlightForm}
          variant="contained"
          size="small"
        >Confirm your order</Button>
      </DialogActions>
    </Dialog >
  )
}

const Result: React.FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (e, id: string) => {
    e.stopPropagation();
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

  // const pdfRef = useRef();

  // const printToPDF = useReactToPrint({
  //   content: () => pdfRef.current
  // })

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
          {numberWithCommas(item.price)} VND
        </div>
        <BoxChild5>
          <Button
            onClick={(e) => handleClickOpen(e, item.id)}
          >Book</Button>
        </BoxChild5>
        {/* </Box> */}
      </BoxLayout>
      <Modal
        //ref={pdfRef}
        open={open}
        handleClose={handleClose}
        handleDecrement={handleDecrement}
        counter={counter}
        handleIncrement={handleIncrement}
        image={item.image}
        price={item.price}
        arrivalTime={item.arrivalTime}
        // arrivalDate={item.arrivalDate}
        departureTime={item.departureTime}
        departureDate={item.departureDate}
        from={item.from}
        to={item.to}
        submitFlightForm={submitFlightForm}
      // printToPDF={printToPDF}
      />
    </>
  )
}

export default Result