import { createStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import {
  Control,
  Controller,
  ValidationValueMessage,
  useFormContext,
} from 'react-hook-form'

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

  // const { getValues } = useFormContext()

  return (
    <div className={classes.autoComplete}>
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        rules={{ required }}
        // rules={{
        //   validate: () => {
        //     return getValues(name).length > 0
        //   },
        // }}
        render={({ onChange, ...inProps }) => {
          return (
            <Autocomplete
              {...inProps}
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
        }}
      />
    </div>
  )
}
