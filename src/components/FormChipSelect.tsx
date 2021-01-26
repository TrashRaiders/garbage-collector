import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import { Control, ValidationValueMessage } from 'react-hook-form'

export interface IChipItem {
  id: string
  label: string
}

interface IFormChipSelectProps {
  name: string
  label: string
  options: IChipItem[]

  required?: boolean | string | ValidationValueMessage<boolean>
  error: boolean
  control: Control
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}))

export default function FormChipSelect(
  props: IFormChipSelectProps,
): React.ReactElement {
  const { label, name, options, control, required, error } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            variant="outlined"
            label="Tags"
            placeholder="e.g. Bikes, Cars,..."
          />
        )}
      />
    </div>
  )
}
