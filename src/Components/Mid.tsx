import React from 'react'
import SideBar from './SideBar'
import MainBody from './MainBody'

const Mid = () => {
  return (
    <>
      <div className='flex flex-row w-screen h-screen items-center justify-between '>
        <SideBar />
        <MainBody />
      </div>
    </>

  )
}

export default Mid