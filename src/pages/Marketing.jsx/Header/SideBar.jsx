import React, { useState } from 'react'
import photo1 from '../../../assets/image/photo1.jpeg'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../../context/userContext/UserContext'
import { User, User2Icon, UserCircle } from 'lucide-react'

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const userContext = useUserContext()
  const email = userContext.userDetails?.email
  const navList = [email || '', 'Settings', 'Notification', 'LogOut']
  const [isDropped, setDropped] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  return (
    <div className='max-w-7xl md:p-5 m-auto'>
      <div className='flex items-center justify-between'>
        {/* <img src={photo1} className='md:w-[150px] w-[90px]' /> */}
        <h2>INVESTMENT APP</h2>
        {/* Desktop Navigation */}
        <div className='flex items-center gap-2'>
          <UserCircle size={25} className='cursor-pointer' />
          <button onClick={() => userContext.logOut()}>Log out</button>
        </div>
        {/* Mobile Dropdown Toggle */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleDropdown}
            className='font-semibold text-blue-600'
					>
						victortobi2000@gmail.com
					</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen &&
      <div className='md:hidden mt-3 bg-white shadow-lg rounded-lg'>
        <ul className='flex flex-col gap-3 p-4'>
          {navList.map((item, index) =>
            <li className='font-semibold hover:text-blue-600' key={index}>
              {item === 'LogOut'
									? <Link to='/'>
  {item}
										</Link> // Use Link only for "LogOut"
									: item}
            </li>
						)}
        </ul>
      </div>}
    </div>
  )
}

export default NavBar
