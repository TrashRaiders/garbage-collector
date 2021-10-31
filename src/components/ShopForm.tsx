import { ErrorMessage } from '@hookform/error-message'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import * as yup from 'yup'

import FormChipSelect from './ShopForm/FormChipSelect'
import FormInput from './ShopForm/FormInput'
import FormSelect from './ShopForm/FormSelect'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
}))

// data structure of the resulting form values
export interface FormValues {
  name: string
  type: string
  tags: string[]
}

// validation rules
export const FORM_SCHEMA = yup
  .object()
  .shape({
    name: yup.string().required(),
    type: yup.string().required(),
    tags: yup.array().of(yup.string()),
  })
  .required()

interface ShopFormProps {
  className?: string
}

ShopForm.defaultProps = {
  className: undefined,
}
function ShopForm(props: ShopFormProps): React.ReactElement {
  const { className } = props

  const classes = useStyles()
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  const { t } = useTranslation('common')

  // TODO should be fetched from API
  const tagOptions = [
    { id: 'bicycles', label: t('bicycles') },
    { id: 'cars', label: t('cars') },
    { id: 'hifi', label: t('hifi') },
  ]

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
        render={({ message }: { message: string }) => (
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        )}
      />

      <FormSelect
        name="type"
        label={t('shopType')}
        control={control}
        error={!!errors.type}
        required={t('thisFieldIsRequired')}
        options={[
          {
            id: 'shop',
            label: t('shop'),
          },
          {
            id: 'private',
            label: t('private'),
          },
        ]}
      />

      <ErrorMessage
        errors={errors}
        name="type"
        render={({ message }: { message: string }) => (
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        )}
      />

      <FormChipSelect
        name="tags"
        label={t('shopTags')}
        control={control}
        error={!!errors.tags}
        options={tagOptions}
      />

      <ErrorMessage
        errors={errors}
        name="tags"
        render={({ message }: { message: string }) => (
          <Typography variant="body2" color="error">
            {message}
          </Typography>
        )}
      />
    </div>
  )
}

export default ShopForm
