import React from 'react'
import MainTop from './MainTop'
import CardBody from './CardBody'

const MainBody = () => {
  return (
    <div className='relative flex flex-col justify-between items-center w-full h-full'>
      <MainTop />
      <CardBody />
    </div>
  )
}

export default MainBody 