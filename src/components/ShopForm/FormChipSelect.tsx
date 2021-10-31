import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { Control, useController, ValidationRule } from 'react-hook-form'

export interface IChipItem {
  id: string
  label: string
}

interface IFormChipSelectProps {
  name: string
  label: string
  options: IChipItem[]

  required?: boolean | string | ValidationRule<boolean>
  error?: boolean

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}

FormChipSelect.defaultProps = {
  required: false,
  error: false,
}

export default function FormChipSelect(
  props: IFormChipSelectProps,
): React.ReactElement {
  const { label, name, options, control, required, error } = props

  const {
    field: { onChange, ...selectChipProps },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: [],
  })

  const handleChange = (data: IChipItem[]) => {
    const valueToSend = data.map((item) => item.id) || []
    onChange(valueToSend)
  }

  return (
    <Autocomplete
      {...selectChipProps}
      fullWidth
      multiple
      options={options}
      onChange={(event, data) => handleChange(data)}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      filterSelectedOptions
      renderInput={(parameters) => (
        <TextField
          {...parameters}
          error={error}
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
