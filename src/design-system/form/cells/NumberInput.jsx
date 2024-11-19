// concepts props- properties

export const NumberInput = ({ placeholder, register, name, className }) => {
  return (
    <input
      type='number'
      placeholder={placeholder}
      className={'outline-none w-64 h-10 border p-3 rounded-sm '}
      {...register(name, { valueAsNumber: true })}
		/>
  )
}
