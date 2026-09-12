import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 rounded-2xl border border-gray-200 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800 tracking-tight">
        <img src="./src/assets/react.svg" alt="" />
      </div>
      <div className='flex gap-7 font-semibold'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <button
      onClick={()=>{
        setToggle((prev)=>!prev)
      }}
        className="px-5 cursor-pointer py-2.5 rounded-xl bg-black text-white font-semibold
               hover:bg-gray-800 active:scale-95 transition-all duration-200
               shadow-sm"
      >
        Create User
      </button>
    </div>
  );
}

export default Navbar
