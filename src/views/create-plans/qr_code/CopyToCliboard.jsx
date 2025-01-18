import { useState, useEffect } from 'react'
import { Copy } from 'lucide-react'

const CopiedToClipBoardMessage = ({ isCopied }) => {
  if (!isCopied) return null
  return (
    <span className='absolute top-[85%] left-[57%] text-sm bg-background p-2 rounded-lg z-50 text-textSecondary font-bold'>
			Copied to Clipboard
		</span>
  )
}

const useCopyToCloboardHook = textToCopy => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    setIsCopied(true)
  }

  useEffect(
		() => {
  setTimeout(() => {
    setIsCopied(false)
  }, 3000)
},
		[handleCopy]
	)
  return { setIsCopied, isCopied, handleCopy }
}

export const CopyToClipBoard = ({ textToCopy }) => {
  const { isCopied, handleCopy } = useCopyToCloboardHook(textToCopy)
  return (
    <button onClick={handleCopy}>
      <Copy size={20} />
      <CopiedToClipBoardMessage isCopied={isCopied} />
    </button>
  )
}
