import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { userSchema } from '../../lib/zod-schema'
import { SIGNIN_FIELDS } from './shared/constant'
import { ApiRequest } from '../../lib/data/makeRequest'
import { ToatMessage, useToast } from '../../components/ToatMessage'
import AuthLayout from '../../layouts/formsLayouts/AuthLayout'
import { useUserContext } from '../../context/userContext/UserContext'
import styles from '../../pages/Marketing.jsx/Header/ui/Signin.module.css'
import FormSchema from '../../design-system/form/FormSchema'

export const useAuthenticate = () => {
  const { setIsLoggedIn } = useUserContext()
  const navigate = useNavigate()

  const authenticate = token => {
    setIsLoggedIn(true)
    localStorage.setItem('token', JSON.stringify(token))
    navigate('/Home')
  }
  return authenticate
}

const useSignInMutation = () => {
  const { setToast, toast, dismissToast } = useToast()
  const authenticate = useAuthenticate()
  const mutate = useMutation({
    mutationFn: async data => {
      return await ApiRequest.POST('auth-system/login', data)
    },
    onSuccess: async data => {
      if (data.status === 200) {
        authenticate(data.token)
      }
      if (data.status === 401) {
        setToast({ message: 'Invalid username or password', status: 'error' })
      }
    },
    onError: async error => {
      setToast({
        message: error.message || 'An error occurred',
        status: 'error'
      })
    }
  })
  return { mutate, toast, dismissToast }
}

export const Signin = () => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema)
  })

  const { dismissToast, mutate, toast } = useSignInMutation()

  const submit = async data => {
    await mutate.mutateAsync(data)
  }

  return (
    <AuthLayout title={'LogIn'}>
      <div>
        <FormSchema
          error={errors}
          fields={SIGNIN_FIELDS}
          handleSubmit={handleSubmit(submit)}
          loading={mutate.isPending}
          register={register}
				/>
      </div>
      <ToatMessage toast={toast} dismissToast={dismissToast} />
    </AuthLayout>
  )
}
