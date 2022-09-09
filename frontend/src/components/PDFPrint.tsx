import React, { useRef, useEffect, useState } from 'react'

//mui
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
import { useReactToPrint } from 'react-to-print'
import Typography from '@mui/material/Typography';

const PDFPrint = React.forwardRef((props, ref) => {
  const [formArr, setFormArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < props.counter; i++) {
      let firstName = (document.getElementById(`first-name-${i}`) as HTMLInputElement).value
      let lastName = (document.getElementById(`last-name-${i}`) as HTMLInputElement).value
      let ssn = (document.getElementById(`ssn-${i}`) as HTMLInputElement).value
      arr.push(
        {
          first_name: firstName,
          last_name: lastName,
          ssn: ssn
        }
      )
    }
    setFormArr(arr)
    // return () => {
    //   arr = []
    // }
  })
  return (
    <div ref={ref}>
      <DialogContent>
        <img src={props.image} width="40" height="40" />
        <DialogContentText style={{ fontSize: `24px` }}>
          <b>{props.from} - {props.to}</b>
        </DialogContentText>
        <DialogContentText style={{ display: `flex`, flexDirection: `collumn`, justifyContent: `center`, alignItems: `center`, gap: `5%` }}>
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
        </DialogContentText>
        <DialogContentText>
          <b>Departure Date: {props.departureDate}</b>
        </DialogContentText>
        <DialogContentText>
          <b>Ticket price: {props.price} VND/Person</b>
        </DialogContentText>
      </DialogContent>
      {(() => {
        //console.log(props.counter);
        let arr = [];
        for (let i = 0; i < props.counter; i++) {
          //let stringify = JSON.parse(formArr[i]);
          arr.push(
            <>
              <div style={{ textAlign: 'start', paddingLeft: '10px', }}><b>Person {i + 1}</b></div>
              <Grid container spacing={1} columns={12}>
                <Grid item xs={12} sm={4}>
                  {/* <TextField id={`first-name-${i}`} fullWidth label="First Name" variant="outlined"
                    value={document.getElementById(`first-name-${i}`)?.textContent} /> */}
                  {
                    //formArr[i]['first_name']
                    //formArr[i].first_name
                  }
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <TextField id={`last-name-${i}`} fullWidth label="Last Name" variant="outlined" /> */}
                  {
                    //(document.getElementById(`last-name-${i}`) as HTMLInputElement).value
                    //formArr[i].lastName ? formArr[i].lastName : ""
                    //formArr[i]['last_name']
                  }
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <TextField id={`ssn-${i}`} fullWidth label="Social Security Number" variant="outlined" /> */}
                  {
                    //(document.getElementById(`ssn-${i}`) as HTMLInputElement).value
                    //formArr[i]['ssn']
                  }
                </Grid>
              </Grid>
            </>
          )
        }
        return arr
      })()}
      <div style={{ textAlign: 'start', paddingLeft: '10px', }}><b>Contact and payments</b></div>
      <Grid container spacing={1} columns={12}>
        <Grid item xs={12} sm={4}>
          <TextField id="email" fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="bank-name" fullWidth label="Bank Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField id="credit-card" fullWidth label="Credit Card Number" variant="outlined" />
        </Grid>
      </Grid>
      <DialogContentText style={{ float: 'right', paddingRight: `19px` }}>
        <b>Total price: {props.price * (props.counter)}</b>
      </DialogContentText>
    </div>
  )
})

export default PDFPrint