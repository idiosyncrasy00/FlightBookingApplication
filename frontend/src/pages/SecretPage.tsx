import {useState} from 'react'
import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'

//mui import
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Result from '../components/Result'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
    height: `20vh`
  },

  formStyling: {
    display: `flex`
  }
};

function SecretPage() {
  const navigate = useNavigate()

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <Paper style={styles.paperContainer}>
        <div style={styles.formStyling}>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>


          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">Departure Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel id="demo-simple-select-label">Minimum Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </div>
        <br></br>
        <Button>Search Flight</Button>
      </Paper>
      <Typography variant="h3" style={styles.centerText}>Search Results</Typography>
      <Box
        style={styles.searchResult}
      >
        <div>
          Img
        </div>
        <div>
          Vietnam Airlines
        </div>
        <div>
          <span style={{ "padding-left": '5px' }}>21:30</span>
          <br />
          <span>
            Ha Noi
          </span>
        </div>
        --
        <div>
          <span style={{ "padding-left": '5px' }}>
            22:30
          </span>
          <br />
          <span>
            Sai Gon
          </span>
        </div>
        <div>
          10000 VND
        </div>
        <div>
          <Button>Book</Button>
        </div>
      </Box>

      <div style={styles.searchResult}>
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
      </div>
    </div >
  )
}

export default SecretPage