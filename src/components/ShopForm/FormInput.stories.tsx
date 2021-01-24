import React from 'react'
import { useForm } from 'react-hook-form'

import CommonHead from '../CommonHead'
import CommonProviders from '../CommonProviders'

import FormInput from './FormInput'

export default { title: 'Components/FormInput' }

interface IFormInput {
  name: string
}

export function Initial(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <CommonHead>
      <CommonProviders>
        <FormInput label="Label" name="name" control={control} error={false} />
      </CommonProviders>
    </CommonHead>
  )
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return (
    <CommonHead>
      <CommonProviders>
        <FormInput label="Label" name="name" control={control} error />
      </CommonProviders>
    </CommonHead>
  )
}
