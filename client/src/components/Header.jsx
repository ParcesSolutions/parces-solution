import { Link, useLocation } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react'
import parces_small_logo from '../logo/parces_small_logo.jpg'

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl flex'>
        <span><img className='h-10 sm:h-14 rounded-md' src={parces_small_logo} alt="parces solutions logo"/></span>
        <h1 className='self-center pl-1 font-semibold dark:text-white'>Parces Solutions</h1>
      </Link>
      <div className='flex gap-2 md:order-2'>
        <Link to='/sign-in'>
          <Button className='bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 text-white' outline color='hover:bg-blue-900' pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
        <Navbar.Collapse className='px-2 self-center'>
          <Navbar.Link active={path === "/"}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header