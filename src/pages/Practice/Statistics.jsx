import Progress from './Progress'
import Summary from './Summary'
import Coach from './Coach'

export default function Statistics() {
  return (
    <div className='w-2/5'>
      <Progress/>
      <Summary/>
      <Coach/>
    </div>
  )
}
