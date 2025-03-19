
import { FaCheckCircle } from "react-icons/fa";

export default function Card({props}) {
    const {title , subTitle , title2 , children , features , btn} = props
  return (
    <div className='border-2 border-gray-400 hover:border-white hover:border-4 rounded-md py-3 px-4'>
      <h2 className='text-white'>{title}</h2>
      <p  className='text-gray-400'>{subTitle}</p>
      <div className='flex items-end py-4'>
      <h1 className='text-white text-2xl'>{title2}</h1>
      {children && <p className="text-gray-400">{children}</p>}
      </div>
      {features.map(item => <p className="flex items-center text-white gap-2"><FaCheckCircle size='15'/>{item}</p>)}
      <button className='border-2 border-gray-500 w-full text-center py-2 rounded-sm my-3 hover:bg-white hover:text-black cursor-pointer'>{btn}</button>
    </div>
  )
}
