import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Control, ValidationValueMessage, useController } from 'react-hook-form'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)

interface Item {
  id: string
  label: string
}
interface FormSelectProps {
  name: string
  label: string
  options: Item[]

  required?: boolean | string | ValidationValueMessage<boolean>
  error: boolean
  control: Control
}

function FormSelect(props: FormSelectProps): React.ReactElement {
  const { label, name, options, control, required, error } = props

  const classes = useStyles()

  const { t } = useTranslation('common')

  const {
    field: { ref, ...selectProps },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: '',
  })

  return (
    <FormControl fullWidth className={classes.formControl}>
      <InputLabel id={`${name}-label`} variant="outlined" required={!!required}>
        {label}
      </InputLabel>

      <Select
        ref={ref}
        labelId={`${name}-label`}
        id={name}
        label={label}
        error={error}
        variant="outlined"
        required={!!required}
        {...selectProps}
      >
        {!required && (
          <MenuItem value="">
            <em>{t('noSelection')}</em>
          </MenuItem>
        )}

        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FormSelect
