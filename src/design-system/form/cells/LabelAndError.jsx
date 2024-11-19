import React from 'react'

export const LabelAndError = ({ name, error, children }) => {
  return (
    <div className='flex items-start flex-col gap-5 relative'>
      <label htmlFor={name}>
        {name}
      </label>
      {children}
      {error[name] &&
      <span className='absolute text-red-400 text-sm top-20'>
        {error[name].message}
      </span>}
    </div>
  )
}
