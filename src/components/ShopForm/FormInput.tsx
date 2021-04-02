import { TextField } from '@material-ui/core'
import React from 'react'
import type { Control, ValidationValueMessage } from 'react-hook-form'
import { useController } from 'react-hook-form'

interface FormInputProps {
  name: string
  label: string
  required?: boolean | string | ValidationValueMessage<boolean>

  error: boolean

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}

FormInput.defaultProps = {
  required: false,
}

function FormInput(props: FormInputProps): React.ReactElement {
  const { name, label, required, error, control } = props

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue: '',
  })

  return (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      inputRef={ref}
      variant="outlined"
      label={label}
      InputLabelProps={{
        required: !!required,
      }}
      error={error}
      fullWidth
    />
  )
}

export default FormInput
