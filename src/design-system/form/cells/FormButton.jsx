import React from 'react'
import { LoaderCmp } from '../../../components/LoaderCmp'

export const FormButton = ({ buttonName, className, loading }) => {
  return (
    <motion.button type='submit' className={className} disabled={loading}>
      {mutate.isPending ? <span>Loading...</span> : buttonName}
    </motion.button>
  )
}

export default FormButton
