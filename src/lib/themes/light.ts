import { blueGrey, grey, lightGreen } from '@mui/material/colors'
import { ThemeOptions } from '@mui/material/styles'

export const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: lightGreen[900],
      contrastText: '#FEFEFE',
    },
    secondary: {
      main: blueGrey[700],
    },
    text: {
      secondary: grey[800],
      primary: grey[900],
    },
  },
}
