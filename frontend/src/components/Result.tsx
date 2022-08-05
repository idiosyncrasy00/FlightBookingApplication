import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { flightInterface } from '../interfaces/flightInterface'

type Props = {
  item: flightInterface;
  //booking: (clickedItem: CartItemInterface) => void;
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

const Result: React.FC<Props> = ({ item }) => (
  <Box
    style={styles.searchResult}
  >
    <div>
      Img
    </div>
    <div>
      {item.brand}
    </div>
    <div>
      <span style={{ "padding-left": '20px' }}>{item.departureTime}</span>
      <br />
      <span>Hanoi</span>
    </div>
    --
    <div>
      <span style={{ "padding-left": '20px' }}>
        {item.arrivalTime}
      </span>
      <br />
      <span>
        {item.destination}
      </span>
    </div>
    <div>
      {/* 10000 VND */}
      {item.price}
    </div>
    <div>
      <Button>Book</Button>
    </div>
  </Box>
)

export default Result