import React from 'react'
import { useForm } from 'react-hook-form'

import CommonHead from './CommonHead'
import CommonProviders from './CommonProviders'
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
    <CommonHead>
      <CommonProviders>
        <FormChipSelect options={options} />
      </CommonProviders>
    </CommonHead>
  )
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <CommonHead>
      <CommonProviders>
        <FormChipSelect options={options} error />
      </CommonProviders>
    </CommonHead>
  )
}
