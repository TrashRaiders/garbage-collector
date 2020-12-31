import {
  Button,
  Container,
  Paper,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import Layout from '../../components/Layout'
import ShopForm from '../../components/ShopForm'

type FormValues = {
  name: string
  tags: string[]
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    flexDirection: 'column',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBlockStart: 20,
  },
  form: {
    marginBlockEnd: 20,
  },
}))

const onSubmit: SubmitHandler<FormValues> = () => {
  // TODO send the mutation request
}

const onError: SubmitErrorHandler<FormValues> = () => {
  // additional actions when the form has errors
}

function NewShopPage(): React.ReactNode {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const methods = useForm<FormValues>()
  const { handleSubmit } = methods

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Layout>
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            {t('newShop')}
          </Typography>

          <FormProvider {...methods}>
            <div className={classes.formContainer}>
              <ShopForm className={classes.form} />

              <Button
                onClick={handleSubmit(onSubmit, onError)}
                variant="contained"
              >
                {t('send')}
              </Button>
            </div>
          </FormProvider>
        </Paper>
      </Container>
    </Layout>
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

export default NewShopPage
