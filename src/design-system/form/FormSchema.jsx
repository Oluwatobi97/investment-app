import React from 'react'
import RenderForm from './RenderForm'
import FormButton from './cells/FormButton'
import { motion } from 'framer-motion'
import styles from '../../pages/Marketing.jsx/Header/ui/Signup.module.css'

const FormSchema = ({
	error,
	register,
	fields,
	handleSubmit,
	className,
	loading
}) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
		>
      <div className={styles.formWrapper}>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-start gap-8'
				>
          {fields.map((field, index) =>
            <RenderForm
              error={error}
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              type={field.type}
              key={index}
              option={field.options}
              className={className}
						/>
					)}
          <FormButton
            buttonName='submit'
            className={`border mb-5 mt-5  w-full rounded-lg h-10 text-white bg-blue-500 disabled:bg-blue-300`}
            loading={loading}
					/>
        </form>
      </div>
    </motion.div>
  )
}

export default FormSchema
