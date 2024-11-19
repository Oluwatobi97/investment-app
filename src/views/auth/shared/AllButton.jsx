import React from 'react'
import { Loader } from 'lucide-react'

export const AllButton = ({ buttonName, classname, loading }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 ${classname ||
				''}`}
      type='submit'
      disabled={loading}
		>
      {loading ? <Loader /> : buttonName}
    </button>
  )
}
