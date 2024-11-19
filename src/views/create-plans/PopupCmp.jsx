import { X } from 'lucide-react'
import React from 'react'

const PopupCmp = ({ showPopUp, setPopUp, popUpfunc }) => {
  console.log(showPopUp)
  return (
    <div className={`${showPopUp ? 'absolute top-10 right-10' : 'hidden'}`}>
      <div className='border p-3 border-sucessColor bg-neturalColor text-sucessColor font-bold rounded-md'>
        <div className=' p-3 capitalize text-center text-sm'>
					done
					<button className='border p-3' onClick={popUpfunc}>
						Done
					</button>
        </div>
      </div>
    </div>
  )
}

export default PopupCmp
