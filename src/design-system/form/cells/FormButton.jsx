import React from 'react'
import { LoaderCmp } from '../../../components/LoaderCmp'

export const FormButton = ({ buttonName, className, loading }) => {
  return (
    <button
      type='submit'
      className={!className ? '' : className}
      disabled={loading}
		>
      <span className={`${loading ? ' ' : ''}`}>
        {loading ? <LoaderCmp /> : buttonName}
      </span>
    </button>
  )
}

export default FormButton
