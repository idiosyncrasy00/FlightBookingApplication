import { useState } from 'react'
import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

//mui import
import Paper from '@mui/material/Paper';
//import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Result from '../components/Result'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField, Button, Typography } from '@mui/material';

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
    brand: '',
    destination: '',
    arrivalDate: '',
    departureDate: ''
  })

  const [results, setResults] = useState([])

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(searchForm)
    //axios.post('http://localhost:8000/api/flights/query', searchForm)
    const res = await axios.post("http://localhost:8000/api/flights/query", searchForm, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setResults(res.data);
    console.log(res.data)
  };

  return (
    <div>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <Paper style={styles.paperContainer}>
        <div style={styles.formStyling}>
          <TextField
            id="standard-basic" label="Brand" variant="standard"
            onChange={e => setSearchForm({ ...searchForm, brand: e.target.value })}
          />
          <TextField
            id="standard-basic" label="Destination" variant="standard"
            onChange={e => setSearchForm({ ...searchForm, destination: e.target.value })}
          />
          <TextField
            id="standard-basic" label="Arrival Date" variant="standard"
            onChange={e => setSearchForm({ ...searchForm, arrivalDate: e.target.value })}
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
        results.map((result) => {
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
                  {result.brand}
                </div>
                <div>
                  <span style={{ "padding-left": '5px' }}>{result.arrivalTime}</span>
                  <br />
                  <span>
                    Ha Noi
                  </span>
                </div>
                --
                <div>
                  <span style={{ "padding-left": '5px' }}>
                    {result.departureTime}
                  </span>
                  <br />
                  <span>
                    {result.destination}
                  </span>
                </div>
                <div>
                  {result.price} VND
                </div>
                <div>
                  <Button onClick={() => {
                    alert(JSON.stringify(result))
                  }}>Book</Button>
                </div>
              </Box>
            </>
          )
        })
      }

      {/* <Box
        style={styles.searchResult}
        sx={{ boxShadow: 3 }}
      >
        <div>
          Img
        </div>
        <div>
          Vietnam Airlines
        </div>
        <div>
          21:30
          Departure Time
        </div>
        <div>
          22:30
          Arrival Time
        </div>

        <div>
          10000 VND
        </div>
        <div>
          <Button>Book</Button>
        </div>
      </Box> */}
      {/* </LocalizationProvider> */}
    </div >
  )
}

export default SecretPage