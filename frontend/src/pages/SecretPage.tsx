import { useState, useEffect } from 'react'
import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'
import PaginationUsage from '../components/PaginationUsage'
import axios from 'axios'
import Select, { SelectChangeEvent } from '@mui/material/Select';

//mui import
import Result from '../components/Result'
import { TextField, Button, Typography } from '@mui/material';
import flightInterface from '../interfaces/flightInterface'
import { airportList } from '../utils/airportList'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { styled } from '@mui/material/styles';

const theme = createTheme();

const Layout = styled(Box)(({ theme }) => ({
  display: `flex`,
  flexDirection: 'column',
  alignItems: `center`,
  justifyContent: `center`,
  textAlign: 'center',
}))

const BoxLayout = styled(Box)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  textAlign: 'center',
  maxWidth: `100%`,
  // [theme.breakpoints.up('xs')]: {
  //   // minHeight: `200vh`,
  //   maxHeight: `235vh`,
  // },
  // [theme.breakpoints.up('lg')]: {
  //   maxHeight: `135vh`,
  // },
  // [theme.breakpoints.up('xs')]: {
  //   flexDirection: `column`,

  // },
  // [theme.breakpoints.between('sm', 'lg')]: {
  //   flexDirection: `row`,
  // },
  // [theme.breakpoints.up('lg')]: {
  //   // marginTop: `5%`,
  //   flexDirection: `column`,
  // },
}));

const SearchStyling = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${paperImg})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100% 100%`,
  width: `100%`,
  height: `60vh`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
}))

const SearchForm = styled(Box)(({ theme }) => ({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  [theme.breakpoints.up('xs')]: {
    flexDirection: `column`,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    flexDirection: `row`,
  },
  [theme.breakpoints.up('lg')]: {
    // marginTop: `5%`,
    flexDirection: `row`,
  },
}))

const CardForm = styled(Card)(({ theme }) => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  [theme.breakpoints.up('xs')]: {
    height: `65%`,
    marginTop: `3%`,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    height: `30%`,
    marginTop: `3%`,
    width: `100vw`,
  },
  [theme.breakpoints.up('lg')]: {
    height: `30%`,
    marginTop: `3%`,
    width: `80vw`,
    // display: `none`,
  },
}))

const PaginationLayout = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up('xs')]: {
    paddingLeft: "2%",
    paddingBottom: "2%"
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    paddingLeft: "1%",
    paddingBottom: "2%"
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: "5%",
    paddingBottom: "2%"
    // display: `none`,
  },
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SecretPage() {

  const [searchForm, setSearchForm] = useState({
    from: '' as string,
    to: '' as string,
  })

  const [results, setResults] = useState([] as flightInterface)
  const [notifyResults, setNotifyResults] = useState('')

  const handleClick = async (e) => {
    e.preventDefault();
    let getDate = document.getElementById('departureDate')?.value || null;
    console.log(getDate);
    let formatDate = null;
    if (getDate !== null) {
      formatDate = getDate.replaceAll('/', '-')
    }
    let submittedForm = {
      from: searchForm.from,
      to: searchForm.to,
      departureDate: formatDate,
    }
    console.log(submittedForm)
    const res = await axios.post("http://localhost:8000/api/flights/query", submittedForm, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (typeof res.data !== 'Object') {
      setNotifyResults("Sorry, there are not available flights you're looking for!")
    }
    setResults(res.data);
    console.log(res.data)
  };

  const [value, setValue] = useState<Date | null>(
    new Date().toJSON().slice(0, 10)
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [page, setPage] = useState(1);
  const handleChangePagination = (event, value) => {
    setPage(PaginationUsage(results, value, 1).page);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Layout>
          <SearchStyling />
          <CardForm>
            <Typography variant="h4">Searching Flights</Typography>
            <SearchForm>
              <FormControl sx={{ m: 2, minWidth: 170 }}>
                <InputLabel id="demo-select-small">From</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="From"
                  onChange={e => setSearchForm({ ...searchForm, from: e.target.value })}
                  MenuProps={MenuProps}
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
              <FormControl sx={{ m: 2, minWidth: 170 }}>
                <InputLabel id="demo-select-small">To</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="To"
                  onChange={e => setSearchForm({ ...searchForm, to: e.target.value })}
                  MenuProps={MenuProps}
                >
                  {
                    airportList.map(airport => {
                      return (
                        <MenuItem
                          value={airport}
                        // style={getStyles(airport, personName, theme)}
                        >
                          {airport}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </FormControl>
              <FormControl sx={{ m: 2, minWidth: 200 }}>
                <DesktopDatePicker
                  label="Departure Date"
                  inputFormat="dd/MM/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={
                    (params) =>
                      <TextField
                        id="departureDate"
                        {...params}
                      />
                  }
                />
              </FormControl>
            </SearchForm>
            <Button onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ width: '55%', my: 2 }}
            >
              Search
            </Button>
          </CardForm>
          <BoxLayout>
            {
              results.length > 0 ? PaginationUsage(results, page, 4).data.map((result) => {
                return (
                  <>
                    <Result
                      item={result}
                    //booking={() => { alert(JSON.stringify(result)) }}
                    />
                  </>
                )
              }) : <div style={{ "font-size": `25px`, "padding": "20px" }}>
                {notifyResults}
              </div>
            }
            {
              results.length > 0 ?
                <>
                  <PaginationLayout>
                    <Pagination
                      count={PaginationUsage(results, page, 4).total_pages}
                      page={PaginationUsage(results, page, 4).page}
                      onChange={handleChangePagination}
                      color="primary"
                    />
                  </PaginationLayout>
                </> : ""
            }
          </BoxLayout>
        </Layout>
      </LocalizationProvider >
    </ThemeProvider>
  )
}

export default SecretPage