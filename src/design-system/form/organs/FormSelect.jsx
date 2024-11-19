import React from 'react'
import { LabelAndError } from '../cells/LabelAndError'
import SelectOption from '../cells/SelectOption'

const FormSelect = ({ name, register, error, option }) => {
  return (
    <LabelAndError error={error} name={name}>
      <SelectOption name={name} register={register} options={option} />
    </LabelAndError>
  )
}

export default FormSelect
