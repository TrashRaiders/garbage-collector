import { blueGrey, grey, lightGreen } from '@material-ui/core/colors'
import { ThemeOptions } from '@material-ui/core/styles'

export const theme: ThemeOptions = {
  palette: {
    type: 'light',
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
