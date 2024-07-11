import React from 'react'
import logo from '../fonebook-header-logo.svg'
import image from '../avatar.jpg'
const Navbar = () => {
    // const handleClick=()=>{
    //     <div className=''></div>
    // }
    return (
    
        <div>
            <nav className='navbar top-0 sticky'>
                <div className='flex justify-evenly bg-Blue h-20'>
                    <div className='image h-35 w-full rounded flex'>
                        <img className='w-27 h-20 bg-blues cursor-pointer rounded-xl p-5 shadow-lg shadow-cyan-200' src={logo} alt="myimage" />
                    </div>
                    <div className='imag hover:bg-slate-400 '>
                        <img className='w-20 h-20 p-1 rounded-full border ring-slate-600 cursor-pointer shadow:xl  ' src={image} alt="myavatar" />
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar
