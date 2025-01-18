import React, { useEffect, useState, useCallback } from 'react'
import { CopyToClipBoard } from './CopyToCliboard'
import QRCode from 'qrcode'

export const QRCodeCmp = ({ walletAddress }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [error, setError] = useState(null)

  const generateQRCode = useCallback(
		async () => {
  try {
    const url = await QRCode.toDataURL(walletAddress, {
      width: 300,
      margin: 2
    })
    setQrCodeUrl(url)
    setError(null)
  } catch (error) {
    setError('Failed to generate QrCode')
    console.error(error)
  }
},
		[walletAddress]
	)

  useEffect(
		() => {
  generateQRCode()
},
		[generateQRCode]
	)
  return (
    <div className='flex flex-col '>
      {qrCodeUrl
				? <img src={qrCodeUrl} className=' h-[400px] object-contain' />
				: <p className='text-red-400 font-sm'>
  {error}
					</p>}
      <div className='text-secondary flex items-center gap-4 bg-gray-100 p-4 rounded-lg text-center break-all'>
        <span className='px-5'>
          {walletAddress}{' '}
        </span>
        <div className=''>
          <CopyToClipBoard textToCopy={walletAddress} />
        </div>
      </div>
    </div>
  )
}
