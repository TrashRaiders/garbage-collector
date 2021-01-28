import {
  Button,
  CircularProgress,
  Container,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GetServerSideProps } from 'next'
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
import { useCreateShopMutation } from '../../generated/graphql'
import { ssrGetShops } from '../../generated/page'

type FormValues = {
  name: string
  type: string
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

const onError: SubmitErrorHandler<FormValues> = (errors) => {
  // additional actions when the form has errors
  // eslint-disable-next-line no-console
  console.log({ errors })
}

function NewShopPage(): React.ReactNode {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const methods = useForm<FormValues>()
  const { handleSubmit } = methods

  const [createShop, { loading, error }] = useCreateShopMutation()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const variables = { value: data }

    // eslint-disable-next-line no-console
    console.log({ createShop: variables })
    createShop({ variables })
  }

  const { data } = ssrGetShops.usePage()

  // eslint-disable-next-line no-console
  console.log({ shopData: data })

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

              {error && <Typography color="error">{error}</Typography>}

              <Button
                onClick={handleSubmit(onSubmit, onError)}
                variant="contained"
                startIcon={
                  loading && <CircularProgress size={18} color="inherit" />
                }
                disabled={loading}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return ssrGetShops.getServerPage({}, context)
}

export default NewShopPage
