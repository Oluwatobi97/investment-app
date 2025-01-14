import React from 'react'
import { motion } from 'framer-motion'
export const FormButton = ({ buttonName, className, loading }) => {
  return (
    <motion.button type='submit' className={className} disabled={loading}>
      {loading ? <span>Loading...</span> : buttonName}
    </motion.button>
  )
}

export default FormButton
