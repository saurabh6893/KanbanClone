import React from 'react'

const Upright = () => {
  return (
    <div className='flex flex-row justify-start items-center w-96 ml-14'>

      <svg className="font-inter font-semibold text-4xl leading-56 capitalize mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8H11" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 11V5" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.75 15.5H10.25C14 15.5 15.5 14 15.5 10.25V5.75C15.5 2 14 0.5 10.25 0.5H5.75C2 0.5 0.5 2 0.5 5.75V10.25C0.5 14 2 15.5 5.75 15.5Z" fill="#5030E5" fill-opacity="0.2" />
      </svg>
      <p className="w-42 h-19 font-inter font-medium text-base leading-19 capitalize text-purple-600">Invite</p>


      <div className="flex flex-row justify-between items-center w-16 mx-6">

      </div>
    </div >
  )
}

export default Upright


