import React from 'react'
import { LabelAndError } from '../cells/LabelAndError'
import { NumberInput } from '../cells/NumberInput'

const FormNumberInput = ({ error, placeholder, register, name, className }) => {
  return (
    <LabelAndError error={error} name={name}>
      <NumberInput
        className={className}
        name={name}
        placeholder={placeholder}
        register={register}
			/>
    </LabelAndError>
  )
}

export default FormNumberInput
