import { useState, useEffect } from 'react';

//mui
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import headerConfig from '../adapters/headerConfig'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import PaginationUsage from '../components/PaginationUsage'
import formatDate from '../utils/formatDate'

import {
  Layout,
} from './PaymentHistoryPage.styles'

function createData(
  PaymentID: string,
  FlightID: string,
  BankName: string,
  CreditCardNumber: number,
  Amount: number,
  Date: string,
) {
  return { PaymentID, FlightID, BankName, CreditCardNumber, Amount, Date };
}

const styles = {
  root: {
    display: 'flex',
    marginTop: 10,
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
    textAlign: 'center',
  }
}


export default function PaymentHistoryPage() {
  const userId = useSelector((state) => state.userInfoReducer.user._id)
  //const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [paymentList, setPaymentList] = useState([]);
  const handleChangePagination = (event, value) => {
    setPage(PaginationUsage(paymentList, value, 1).page);
  };

  const onClick = async (e, currentSelect) => {
    e.stopPropagation();

    //alert(JSON.stringify(currentSelect));
    let isExecuted = confirm("Are you sure to cancel the booking?");

    if (isExecuted) {
      let cancelPayment = await axios.delete("http://localhost:8000/api/payments/cancel", {
        params: {
          payment_id: currentSelect.PaymentID
        }
      }, headerConfig);
      console.log(cancelPayment);

      let cancelBooking = await axios.put("http://localhost:8000/api/utils/cancel", {
        flight_id: currentSelect.FlightID,
        payment_id: currentSelect.PaymentID
      }, headerConfig);
      console.log(cancelBooking);
      alert("Cancel booking successfully!");
    }
    //return <Button onClick={onClick}>Cancel</Button>;
  };

  useEffect(() => {
    (async () => {
      let paymentArr = []
      const res = await axios.get("http://localhost:8000/api/payments/history", {
        params: {
          user_id: userId
        }
      });
      for (let i = 0; i < res.data.length; i++) {
        paymentArr.push(
          createData(
            res.data[i]._id,
            res.data[i].flight_id,
            res.data[i].bankName,
            res.data[i].creditCard_number,
            res.data[i].amount,
            formatDate(res.data[i].createdAt)
          )
        )
      }
      //setRows(paymentArr);
      setPaymentList(paymentArr);
      //console.log(res.data)
    })();
  }, [])
  return (
    <>
      <div style={{ marginTop: '5%' }}>
        <h1 style={{ textAlign: 'center' }}>Payment History</h1>
        <TableContainer
          style={{
            //height: 400, width: '100vw',
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <div style={styles.root}>
            <Table
              // sx={{ width: `80vw` }}
              style={styles.table}
              aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
                >
                  <TableCell style={styles.tableCell}><b>Payment ID</b></TableCell>
                  <TableCell style={styles.tableCell}><b>Flight ID</b></TableCell>
                  <TableCell style={styles.tableCell}><b>Bank Name</b></TableCell>
                  <TableCell style={styles.tableCell}><b>Credit Card Number</b></TableCell>
                  <TableCell style={styles.tableCell}><b>Amount</b></TableCell>
                  <TableCell style={styles.tableCell}><b>Transaction Date</b></TableCell>
                  <TableCell style={styles.tableCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PaginationUsage(paymentList, page, 4).data.map((payment) => (
                  <TableRow
                    key={payment.paymentID}
                    sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
                  >
                    <TableCell
                      style={styles.tableCell}
                    >
                      {payment.PaymentID}
                    </TableCell>
                    <TableCell
                      style={styles.tableCell}
                    >
                      {payment.FlightID}
                    </TableCell>
                    <TableCell
                      style={styles.tableCell}
                    >{payment.BankName}</TableCell>
                    <TableCell
                      style={styles.tableCell}
                    >{payment.CreditCardNumber}</TableCell>
                    <TableCell style={styles.tableCell}>{payment.Amount}</TableCell>
                    <TableCell style={styles.tableCell}>{payment.Date}</TableCell>
                    <TableCell style={styles.tableCell}><Button onClick={(e) => onClick(e, payment)}>Cancel</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          <Pagination
            count={PaginationUsage(paymentList, page, 4).total_pages}
            page={PaginationUsage(paymentList, page, 4).page}
            onChange={handleChangePagination}
            color="primary"
          />
        </div>
      </div>
    </>
  )
}