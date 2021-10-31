import { blueGrey, grey, lightGreen } from '@mui/material/colors'
import { ThemeOptions } from '@mui/material/styles'

export const theme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: lightGreen[200],
      contrastText: '#030303',
    },
    secondary: {
      main: blueGrey[400],
    },
    text: {
      primary: grey[100],
      secondary: grey[200],
    },
    background: {
      default: '#202020',
      paper: '#303030',
    },
  },
}
