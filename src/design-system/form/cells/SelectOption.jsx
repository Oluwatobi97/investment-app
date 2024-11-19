import React from 'react'

export const SelectOption = ({ options, name, register }) => {
  return (
    <div>
      <select name={name} {...register(name)}>
        <option>select {name} </option>
        {options?.map((option, index) =>
          <option key={index} value={option} name={name} >
            {option}
          </option>
				)}
      </select>
    </div>
  )
}

export default SelectOption
