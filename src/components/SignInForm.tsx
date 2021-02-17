import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Animate from './Animate'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(2),
  },
}))

function SignInForm(): React.ReactElement {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography component="p" variant="body1">
          Damit du den vollen Umfang unseres Systems nutzen kannst , müssen wir sicherstellen, dass Du Du bist.
        </Typography>

        <Box className={classes.button}>
          <Button variant="contained" startIcon={<MdEmail />} fullWidth>
            Sign in with Email
          </Button>
        </Box>

        <Divider variant="middle" />

        <Box className={classes.button}>
          <Button variant="contained" startIcon={<FaGoogle />} fullWidth>
            Sign in with Google
          </Button>
        </Box>
        <Box className={classes.button}>
          <Button variant="contained" startIcon={<FaFacebookF />} fullWidth>
            Sign in with Facebook
          </Button>
        </Box>
        <Box className={classes.button}>
          <Button variant="contained" startIcon={<FaGithub />} fullWidth>
            Sign in with Github
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default SignInForm
