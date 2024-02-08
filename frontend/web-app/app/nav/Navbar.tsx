import React from 'react'
import Search from './Search'
import Logo from './Logo'
import LoginButton from './LoginButton'
import { getCurrentUser } from '../actions/authActions'
import UserActions from './UserActions'

const Navbar = async () => {

  const user = await getCurrentUser()
  //console.log(`UserINFO:  ${user}`);
  

  return (
    <header className='sticky top-0 z-50 flex justify-between bg-white p-5 text-gray-800 shadow-md'>
      <Logo />
      <Search />

      {user ? (
        <UserActions />
      ) : (
        <LoginButton />
      )
      }
    </header>

  )
}

export default Navbar