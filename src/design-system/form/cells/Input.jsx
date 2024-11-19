// concepts props- properties

export const Input = ({ type, placeholder, register, name, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={'outline-none w-64 h-10 border p-3 rounded-sm '}
      {...register(name)}
		/>
  )
}
