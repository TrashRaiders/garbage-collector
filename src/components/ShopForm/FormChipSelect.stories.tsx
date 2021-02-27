import React from 'react'
import { useForm } from 'react-hook-form'

import FormChipSelect, { IChipItem } from './FormChipSelect'

export default { title: 'Components/FormChipSelect' }

interface IFormInput {
  name: string
}

const options: IChipItem[] = [
  { id: 'bikes', label: 'Bikes' },
  { id: 'cars', label: 'Cars' },
  { id: 'hifi', label: 'Hifi' },
]

export function Initial(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <FormChipSelect
      options={options}
      control={control}
      name="initial"
      label="Label"
    />
  )
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <FormChipSelect
      options={options}
      error
      control={control}
      name="error"
      label="Label"
    />
  )
}
