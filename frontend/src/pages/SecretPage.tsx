import { useState } from 'react'
import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//mui import
import Paper from '@mui/material/Paper';
import Result from '../components/Result'
import { TextField, Button, Typography } from '@mui/material';
import flightInterface from '../interfaces/flightInterface'
import { airportList } from '../utils/airportList'

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { Calendar } from 'react-date-range-ts';


const styles = {
  paperContainer: {
    backgroundImage: `url(${paperImg})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `100% 100%`,
    width: `99vw`,
    height: `70vh`,
    display: `flex`,
    alignItems: `center`
  },
  textContent: {
    color: `white`,
    flex: `1`,
    alignItems: `flex-start`,
    fontSize: `25px`,
    top: `50`
  },
  bodySection: {
    display: `flex`,
    flexDirection: `row`,
    gap: `5% 5%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  centerText: {
    textAlign: `center`,
  },
  searchResult: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    gap: `3% 3%`,
    height: `20vh`,
    width: `90vw`,
    margin: `2% 3% 2% 3%`,
  },

  formStyling: {
    display: `flex`
  }
};

function SecretPage() {
  const navigate = useNavigate()

  const [searchForm, setSearchForm] = useState({
    brand: '' as string,
    from: '' as string,
    to: '' as string,
    arrivalDate: '' as string,
    departureDate: '' as string,
  })

  const [results, setResults] = useState([] as flightInterface)

  const handleClick = async (e) => {
    e.preventDefault();
    let getDate = document.getElementById('arrivalDate')?.value || null;
    console.log(getDate);
    let formatDate = null;
    if (getDate !== null) {
      formatDate = getDate.replaceAll('/', '-')
    }
    let submittedForm = {
      brand: searchForm.brand,
      from: searchForm.from,
      to: searchForm.to,
      arrivalDate: formatDate,
      departureDate: '',
    }
    console.log(submittedForm)
    const res = await axios.post("http://localhost:8000/api/flights/query", submittedForm, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setResults(res.data);
    console.log(res.data)
  };

  const [value, setValue] = useState<Date | null>(
    new Date().toJSON().slice(0, 10)
  );

  const handleChange = (newValue: Date | null) => {
    //let formatDate = newValue.toJSON().slice(0, 10).replace('/', '-')
    //setValue(newValue);
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper style={styles.paperContainer}>
        <div style={styles.formStyling}>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small">Flight Brand</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="Flight Brand"
              //onChange={handleChange}
              onChange={e => setSearchForm({ ...searchForm, brand: e.target.value })}
            >
              <MenuItem value={"Vietnam Airlines"}>Vietnam Airlines</MenuItem>
              <MenuItem value={"VietJet Air"}>VietJet Air</MenuItem>
              <MenuItem value={"Bamboo Airways"}>Bamboo Airways</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small">From</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="From"
              onChange={e => setSearchForm({ ...searchForm, from: e.target.value })}
            >
              {
                airportList.map(airport => {
                  return (
                    <MenuItem value={airport}>{airport}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-select-small">To</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="To"
              onChange={e => setSearchForm({ ...searchForm, to: e.target.value })}
            >
              {
                airportList.map(airport => {
                  return (
                    <MenuItem value={airport}>{airport}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
          {/* <TextField
            id="standard-basic" label="Arrival Date" variant="standard"
            onChange={e => setSearchForm({ ...searchForm, arrivalDate: e.target.value })}
          /> */}
          <DesktopDatePicker
            label="Departure Date"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={
              (params) =>
                <TextField
                  id="arrivalDate"
                  {...params}
                />
            }
          />
          <TextField
            id="standard-basic" label="Departure Date" variant="standard"
            onChange={e => setSearchForm({ ...searchForm, departureDate: e.target.value })}
          />
        </div>
        <br></br>
        <Button onClick={handleClick} color="inherit" variant="outlined" size="small">
          Submit task
        </Button>
      </Paper>
      <Typography variant="h3" style={styles.centerText}>Search Results</Typography>
      {
        results.length > 0 ? results.map((result) => {
          return (
            <Result
              item={result}
              booking={() => { alert(JSON.stringify(result)) }}
            />
          )
        }) : "LOL"
      }
    </LocalizationProvider>
  )
}

export default SecretPage