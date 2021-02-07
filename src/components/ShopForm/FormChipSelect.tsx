import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import React, { useState } from 'react'
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

export default function FormChipSelect(
  props: IFormChipSelectProps,
): React.ReactElement {
  const { label, name, options, control, required, error } = props

  const [hasError, setHasError] = useState(error)

  const validateInputLength = (values) => {
    setHasError(false)
    if (values.length === 0) {
      setHasError(true)
    }
    return values.length === 0 ? required : undefined
  }

  const {
    field: { onChange, ...selectChipProps },
  } = useController({
    name,
    control,
    rules: { validate: validateInputLength },
    defaultValue: [],
  })

  return (
    <Autocomplete
      {...selectChipProps}
      fullWidth
      multiple
      options={options}
      onChange={(e, data) => onChange(data)}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, value) => option.id === value.id}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          error={hasError}
          variant="outlined"
          label={label}
          InputLabelProps={{
            required: !!required,
          }}
        />
      )}
    />
  )
}
