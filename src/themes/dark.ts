import { blueGrey, grey, lightGreen } from '@material-ui/core/colors'
import { ThemeOptions } from '@material-ui/core/styles'

export const theme: ThemeOptions = {
  palette: {
    type: 'dark',
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
