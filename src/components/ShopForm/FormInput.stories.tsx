import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from './FormInput'

export default { title: 'Components/FormInput' }

interface IFormInput {
  name: string
}

export function Initial(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return <FormInput label="Label" name="name" control={control} error={false} />
}

export function Error(): React.ReactElement {
  const { control } = useForm<IFormInput>()

  return <FormInput label="Label" name="name" control={control} error />
}
