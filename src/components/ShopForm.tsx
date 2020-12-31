import { ErrorMessage } from '@hookform/error-message'
import { Typography, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import FormInput from './ShopForm/FormInput'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
}))

interface ShopFormProps {
  className?: string
}

function ShopForm(props: ShopFormProps): React.ReactElement {
  const { className } = props

  const classes = useStyles()
  const { control, errors } = useFormContext()

  const { t } = useTranslation('common')

  return (
    <div className={clsx(className, classes.root)}>
      <FormInput
        name="name"
        label={t('shopName')}
        control={control}
        error={!!errors.name}
        required={t('thisFieldIsRequired')}
      />

      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => (
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        )}
      />
    </div>
  )
}

export default ShopForm
