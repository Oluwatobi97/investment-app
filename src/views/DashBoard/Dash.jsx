import React from 'react'
import OptionComponent from '../../views/auth/shared/OptionComponent'
import Plans from './Plans'
import { useQuery } from '@tanstack/react-query'
import { ApiRequest } from '../../lib/data/makeRequest'

const useGetAllLoggedInUserPlans = () => {
  return useQuery({
    queryFn: async () => {
      return await ApiRequest.GET('investment')
    }
  })
}

export const Dash = () => {
  const { data } = useGetAllLoggedInUserPlans()

  console.log(data)
	const totalAmount = data?.reduce((sum, item) => sum + item.amount, 0)
  return (
    <div className=' md:p-4 p-2'>
      <div className='flex items-center justify-center gap-5 border md:py-3 md:px-64 bg-white '>
        <div className=' py-7  text-7xl text-blue-400'>
          <h1>
            ${totalAmount}
          </h1>
        </div>
        <OptionComponent />
      </div>

      <div className=' mt-7 flex flex-col items-center justify-center'>
        {/* <div className="text-xl font-semibold text-gray-800">
          <h1>You Do Not Have Any Active Investment Plan</h1>
        </div>
        <button className="Border mt-6 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg text-white font-semibold">
          Create Plan
        </button> */}
        <Plans data={data} />
      </div>
    </div>
  )
}

export default Dash
