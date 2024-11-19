import { useEffect, useState } from 'react'

export const DelayRender = ({ delaySec, children }) => {
  const [delay, setDelay] = useState(true)

  useEffect(() => {
    setTimeout(() => setDelay(false), delay)
  }), [delaySec]

  return !delay && children
}
