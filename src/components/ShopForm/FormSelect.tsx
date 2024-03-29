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
import { Control, useController, ValidationValueMessage } from 'react-hook-form'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)

export interface Item {
  id: string
  label: string
}

interface FormSelectProps {
  name: string
  label: string
  options: Item[]

  required?: boolean | string | ValidationValueMessage<boolean>
  error: boolean

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}

FormSelect.defaultProps = {
  required: false,
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
      <InputLabel
        id={`${name}-label`}
        variant="outlined"
        error={error}
        required={!!required}
      >
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
