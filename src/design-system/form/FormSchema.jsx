import React from 'react'
import RenderForm from './RenderForm'
import FormButton from './cells/FormButton'

const FormSchema = ({
	error,
	register,
	fields,
	handleSubmit,
	className,
	loading
}) => {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5'>
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
        className={`border  w-full rounded-lg h-10 text-white bg-blue-500 disabled:bg-blue-300`}
        loading={loading}
			/>
    </form>
  )
}

export default FormSchema
