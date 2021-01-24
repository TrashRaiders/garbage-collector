import React from 'react'
import { useForm } from 'react-hook-form'

import CommonHead from '../CommonHead'
import CommonProviders from '../CommonProviders'

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
    <CommonHead>
      <CommonProviders>
        <FormSelect
          label="Label"
          name="name"
          options={options}
          control={control}
          error={false}
        />
      </CommonProviders>
    </CommonHead>
  )
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <CommonHead>
      <CommonProviders>
        <FormSelect
          label="Label"
          name="name"
          options={options}
          control={control}
          error
        />
      </CommonProviders>
    </CommonHead>
  )
}
