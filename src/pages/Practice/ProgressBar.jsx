import React from 'react'

export default function ProgressBar({w = 'w-1/4'}) {
  return (
    <div
    className="flex w-full h-2 bg-gray-800 rounded-full overflow-hidden dark:bg-neutral-700"
    role="progressbar"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      className={`flex flex-col justify-center rounded-full overflow-hidden bg-white text-xs  text-center whitespace-nowrap transition duration-500  ${w}`}
     
    ></div>
  </div>
  )
}
