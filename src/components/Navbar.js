import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
 const [open, setOpen] = useState(false);

 let openMenu = () => {
    setOpen(true);
 }
 let closeMenu = () => {
     setOpen(false);
}

  return (
    <>
      <div className="flex items-center z-[1] w-screen absolute bg-transparent text-white px-4 py-2 lg:p-4 justify-between">
         <Link to="/">
         <h1 className="flex items-center font-bold"><img src="./images/logo.png" alt="logo" className="w-6 h-6 lg:w-12 lg:h-12" />AW Builders</h1> 
         </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list cursor-pointer pr-2 lg:pr-4" viewBox="0 0 16 16" onClick={openMenu}>
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
      <div className="lg:h-screen h-[100%] z-[1] absolute w-48 bg-gray-900 right-0 bottom-0 flex justify-center" style={{visibility: open ? 'visible' : 'collapse'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg cursor-pointer absolute z-[100] text-white right-4 top-4 lg:top-6 hover:text-red-400 duration-75" onClick={closeMenu} viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
        <ul className="flex flex-col items-center justify-center text-white ">
          <Link to="/">
            <li className="cursor-pointer hover:text-yellow-400 duration-24 my-4">Home</li>
          </Link>
          <Link to="services">
            <li className="cursor-pointer hover:text-yellow-400 duration-24 my-4">Services</li>
          </Link>
          <Link to="contact">
            <li className="cursor-pointer hover:text-yellow-400 duration-24 my-4">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar