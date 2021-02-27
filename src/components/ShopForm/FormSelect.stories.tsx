import React from 'react'
import { useForm } from 'react-hook-form'

import FormSelect, { Item } from './FormSelect'

export default { title: 'Components/FormSelect' }

interface IFormInput {
  name: string
}

const options: Item[] = [
  { id: 'option-1', label: 'Option 1' },
  { id: 'option-2', label: 'Option 2' },
  { id: 'option-3', label: 'Option 3' },
]

export function Initial(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <FormSelect
      label="Label"
      name="name"
      options={options}
      control={control}
      error={false}
    />
  )
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <FormSelect
      label="Label"
      name="name"
      options={options}
      control={control}
      error
    />
  )
}
