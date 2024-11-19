import React from 'react'
import FormSchema from '../../design-system/form/FormSchema'
import { useForm } from 'react-hook-form'
import AuthLayout from '../auth/AuthLayout'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPlanSchema } from '../../lib/zod-schema'
import { useMutation } from '@tanstack/react-query'
import { useToast } from '../../components/ToatMessage'
import { ApiRequest } from '../../lib/data/makeRequest'
import { useNavigate } from 'react-router-dom'

const coins = ['BTC', 'ETH', 'USDT']
const duration = ['1-day', '1-month', '3-month', '6-month', '1-year']

const CREATE_PLANS_FIELDS = [
  {
    type: 'select',
    name: 'coinsType',
    placeholder: 'coin-type',
    options: coins
  },
  {
    type: 'select',
    name: 'investMentDuration',
    placeholder: 'Duration',
    options: duration
  },
  {
    type: 'number',
    name: 'amount',
    placeholder: 'Amount to Invest'
  }
]

const CreatePlans = () => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(createPlanSchema)
  })
  const navigate = useNavigate()

  const submit = data => {
    const { amount } = data
    localStorage.setItem(
			'Tempoary-plan-creation',
			JSON.stringify({ ...data, amount: parseInt(amount) })
		)
    navigate('/preview-plan')
  }
  return (
    <AuthLayout>
      <FormSchema
        className={''}
        error={errors}
        fields={CREATE_PLANS_FIELDS}
        handleSubmit={handleSubmit(submit)}
				//   loading={}
        register={register}
			/>
    </AuthLayout>
  )
}

export default CreatePlans
