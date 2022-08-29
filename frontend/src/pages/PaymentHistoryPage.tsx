import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';


import headerConfig from '../adapters/headerConfig'
//import { displayInfo } from '../redux/userInfoSlice'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const columns: GridColDef[] = [
  { field: 'PaymentID', headerName: 'PaymentID', width: 150 },
  { field: 'FlightID', headerName: 'FlightID', width: 130 },
  { field: 'BankName', headerName: 'Bank Name', width: 100 },
  { field: 'CreditCardNumber', headerName: 'Credit Card Number', width: 150 },
  { field: 'Amount', headerName: 'Amount (in VND)', width: 130 },
  { field: 'Date', headerName: 'Transaction Date', width: 130 },
  {
    field: 'Action', headerName: '',
    width: 100,
    renderCell: (params) => {
      const onClick = async (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        alert(JSON.stringify(thisRow, null, 4));

        let cancelPayment = await axios.delete("http://localhost:8000/api/payments/cancel", {
          params: {
            payment_id: thisRow.PaymentID
          }
        }, headerConfig);
        console.log(cancelPayment);

        let cancelBooking = await axios.put("http://localhost:8000/api/utils/cancel", {
          flight_id: thisRow.FlightID,
          payment_id: thisRow.PaymentID
        }, headerConfig);
        console.log(cancelBooking);
      };

      return <Button onClick={onClick}>Cancel</Button>;
    },
  },
];

export default function PaymentHistoryPage() {
  const userId = useSelector((state) => state.userInfoReducer.user._id)
  const [rows, setRows] = useState([]);
  useEffect(() => {
    (async () => {
      let paymentArr = []
      const res = await axios.get("http://localhost:8000/api/payments/history", {
        params: {
          user_id: userId
        }
      });
      for (let i = 0; i < res.data.length; i++) {
        paymentArr.push({
          id: i,
          PaymentID: res.data[i]._id,
          FlightID: res.data[i].flight_id,
          BankName: res.data[i].bankName,
          CreditCardNumber: res.data[i].creditCard_number,
          Amount: res.data[i].amount,
          Date: res.data[i].createdAt,
        })
      }
      setRows(paymentArr);
      //console.log(res.data)
    })();
  })
  return (
    <>
      <h1>PaymentHistoryPage</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  )
}