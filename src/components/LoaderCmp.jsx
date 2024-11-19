import { Loader } from 'lucide-react'
import { DelayRender } from './delayRender'

export const LoaderCmp = () => {
  return (
    <DelayRender delaySec={3000}>
      <Loader className='animate-spin justify-center' />
    </DelayRender>
  )
}
