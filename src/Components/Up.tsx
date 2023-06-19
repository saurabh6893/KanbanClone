import React from 'react'
import UpLeft from './Upleft'
import Upright from './Upright'



const Up = () => {
  return (
    <div className='flex flex-row justify-between items-center h-56 w-full'>
      <UpLeft />
      <Upright />
    </div>
  )
}

export default Up