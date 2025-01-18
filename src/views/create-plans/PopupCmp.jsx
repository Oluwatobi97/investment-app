import { X } from 'lucide-react'
import { Wallet_DETAILS } from './constants'
import { QRCodeCmp } from './qr_code/QrCodeCmp'

// we want to set wallet address based on the planType.
// create an array of object of wallet and thier address
// loop through each array to find where planType is equal to the wallet name. return the plantType object

const getWalletAddress = coinsType => {
  const matchPlanType = Wallet_DETAILS.find(
		(details, _) => details.walltetType === coinsType
	)
  return matchPlanType.walletAddress
}

const PopupCmp = ({ showPopUp, setPopUp, popUpfunc, coinsType }) => {
  if (!showPopUp) return null
  const walletAddress = getWalletAddress(coinsType)
  return (
    <div className='fixed inset-0 z-50 transion-all duration-75 ease-in-out flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-surface rounded-lg shadow-lg w-[90%] max-w-lg p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-lg font-bold text-primary'>SCAN QR CODE</h2>
          <button
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
            onClick={() => setPopUp(false)}
					>
            <X />
          </button>
        </div>
        <QRCodeCmp walletAddress={walletAddress} />
        {/* Footer */}
        <div className='mt-6 flex justify-end space-x-4'>
          <button
            onClick={popUpfunc}
            className='bg-textSecondary text-surface px-4 py-2 rounded-lg font-bold hover:bg-gray-600 transition'
					>
						Close
					</button>
        </div>
      </div>
    </div>
  )
}

export default PopupCmp
