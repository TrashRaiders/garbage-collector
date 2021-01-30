import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import { Control, ValidationValueMessage, useController } from 'react-hook-form'

export interface IChipItem {
  id: string
  label: string
}

interface IFormChipSelectProps {
  name: string
  label: string
  options: IChipItem[]

  required?: boolean | string | ValidationValueMessage<boolean>
  error?: boolean
  control: Control
}

const useStyles = makeStyles(() =>
  createStyles({
    autoComplete: {
      minWidth: 120,
    },
  }),
)

export default function FormChipSelect(
  props: IFormChipSelectProps,
): React.ReactElement {
  const { label, name, options, control, required, error } = props
  const classes = useStyles()
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: '',
  })

  return (
    <div className={classes.autoComplete}>
      <Autocomplete
        fullWidth
        multiple
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionSelected={(option, value) => option.id === value.id}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            {...inputProps}
            inputRef={ref}
            error={error}
            variant="outlined"
            label={label}
            InputLabelProps={{
              required: !!required,
            }}
          />
        )}
      />
    </div>
  )
}