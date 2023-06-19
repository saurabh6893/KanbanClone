import React from 'react';
import Options from './Options';
import Projects from './Projects';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen p-36 md:w-10 border-r border-gray-500 relative">
      <Options />
      <Projects />


    </div>
  );
};

export default SideBar;


{/* <div className="flex flex-col items-center justify-between h-screen p-36 w-full md:w-1/12 border-r border-gray-500 relative"></div> */ }