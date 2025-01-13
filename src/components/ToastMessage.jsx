import React from 'react'
import { X } from 'lucide-react'
import { useState } from 'react'

export const useToast = () => {
  const initialValues = {
    message: '',
    status: ''
  }
  const [toast, setToast] = useState(initialValues)

  const dismissToast = () => {
    setToast(initialValues)
  }

  return { toast, setToast, dismissToast }
  setToast({ message: 'User signed up successfully', status: 'success' })
}

export const ToastMessage = ({ toast, dismissToast, className }) => {
  if (!toast.message) {
    return null
  }

  const getToastColor = () => {
    switch (toast.status) {
      case 'error':
        return 'text-red-300 border-red-200'
      case 'success':
        return 'text-green-700 border-green-200'
      default:
        return 'text-gray-700 border-gray-200'
    }
  }

  return (
    <div className={className}>
      <div
        className={`${getToastColor()} flex items-center gap-3 justify-between p-3  capitalize text-center text-sm`}
			>
        {toast.message}
        <X size={20} onClick={dismissToast} className='cursor-pointer' />
      </div>
    </div>
  )
}
