import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {

}

const FormInformation: React.FC<Props> = () => {
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  )
}

export default FormInformation