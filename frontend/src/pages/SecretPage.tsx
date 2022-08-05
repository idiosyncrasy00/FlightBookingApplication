import paperImg from '../assets/254367.webp'
import { useNavigate } from 'react-router-dom'

//mui import
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Result from '../components/Result'

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
};

function SecretPage() {
  const navigate = useNavigate()
  return (
    <div>
      <Paper style={styles.paperContainer}>
        <div className="text-content" style={styles.textContent}>
          <p>Hello username, where do you want to fly today?</p>
          <Button onClick={() => { navigate('/register') }}>Sign up now!</Button>
        </div>
      </Paper>
      <Typography variant="h3" style={styles.centerText}>Search Results</Typography>
      {/* <div style={styles.searchResult}> */}
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
          <span style={{ "padding-left": '20px' }}>21:30</span>
          <br />
          <span>Departure Time</span>
        </div>
        --
        <div>
          <span style={{ "padding-left": '20px' }}>
            22:30
          </span>
          <br />
          <span>
            Arrival Time
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