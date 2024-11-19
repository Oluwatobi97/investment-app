import React from 'react'
import { Link } from 'react-router-dom'

const NavigateOptions = ({ title }) => {
  if (title === 'LogIn') {
    return <Link to={'/Sign-up'}>i don't have an account</Link>
  }
  return <Link to={'/Sign-in'}>i already have an account</Link>
}
export const AuthLayout = ({ children, title }) => {
  console.log(title)
  return (
    <div className='absolute left-[10%] top-52 md:left-[30%] md:top-32 lg:left-[40%]  mx-auto p-5 border'>
      <h1 className='w-full text-center pb-10 font-bold text-primaryColor'>
        {title}
      </h1>
      <div className='flex flex-col items-start gap-10'>
        {children}
      </div>
      <NavigateOptions title={title} />
    </div>
  )
}

export default AuthLayout
