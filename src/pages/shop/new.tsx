import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  CircularProgress,
  Container,
  Paper,
  Theme,
  Typography,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { GetServerSideProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import Layout from 'components/ShopDetailsLayout/Layout'
import ShopForm, { FORM_SCHEMA, FormValues } from 'components/ShopForm'
import {
  CreateShopMutationVariables,
  useCreateShopMutation,
} from 'generated/graphql'
import { ssrGetShops } from 'generated/page'

const PREFIX = 'NewShopPage'

const classes = {
  container: `${PREFIX}-container`,
  paper: `${PREFIX}-paper`,
  formContainer: `${PREFIX}-formContainer`,
  form: `${PREFIX}-form`,
}

const StyledLayout = styled(Layout)(({ theme }: { theme: Theme }) => ({
  [`& .${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.paper}`]: {
    padding: theme.spacing(4),
    flexDirection: 'column',
    width: '100%',
  },

  [`& .${classes.formContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBlockStart: 20,
  },

  [`& .${classes.form}`]: {
    marginBlockEnd: 20,
  },
}))

function NewShopPage(): React.ReactNode {
  const { t } = useTranslation('common')
  const theme = useTheme()

  const methods = useForm<FormValues>({
    resolver: yupResolver(FORM_SCHEMA),
  })
  const { handleSubmit } = methods

  const [createShop, { loading, error }] = useCreateShopMutation()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const variables: CreateShopMutationVariables = {
      value: {
        shop_id: `shop:${uuidv4()}`,
        ...data,
      },
    }

    // eslint-disable-next-line no-console
    console.log({ createShop: variables })
    createShop({ variables })
      .then((createShopResult) => {
        // eslint-disable-next-line no-console
        console.log({ createShopResult })
      })
      .catch((createShopError) => {
        // eslint-disable-next-line no-console
        console.error(createShopError)
      })
  }

  const { data, loading: shopsAreLoading } = ssrGetShops.usePage()

  // eslint-disable-next-line no-console
  console.log({ shopData: data, shopsAreLoading })

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <StyledLayout theme={theme}>
      <Container className={classes.container} maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            {t('newShop')}
          </Typography>

          <FormProvider {...methods}>
            <div className={classes.formContainer}>
              <ShopForm className={classes.form} />

              {error && (
                <pre style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
                  {JSON.stringify(error, null, 2)}
                </pre>
              )}

              <Button
                onClick={handleSubmit(onSubmit)}
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
    </StyledLayout>
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

export const getServerSideProps: GetServerSideProps = async () =>
  ssrGetShops.getServerPage({})

export default NewShopPage
