import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
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

type ReturnValue = string[]

function setValueAs(value: IChipItem[]): ReturnValue {
  return value.map((item) => item.id) || []
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
    rules: { required, setValueAs },
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
