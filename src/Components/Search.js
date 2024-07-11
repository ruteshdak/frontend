import React from 'react'

const Search = () => {
  return (
    // <div className='container w-1/2 justify-content-center align-items-center flex'>
    //     <input type='text' placeholder='enter the name of products' className=' bg-slate-300 border-black w-80 text-center' />
      
    // </div>
    <div className='container  flex justify-center items-center  w-full' style={{ height: '10vh' }}>
  <input type='text' placeholder='Search...' className='bg-zinc-300 font-bold text-opacity-50 border-black border-1 w-80 text-center rounded-3xl p-3 hover:shadow shadow-2xl' />
</div>
  )
}

export default Search
