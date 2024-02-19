import {Link} from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react'
import parces_full_logo1 from '../logo/parces_full_logo1.jpg'
import parces_small_logo from '../logo/parces_small_logo.jpg'

function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl flex'>
        <span><img className='h-10 sm:h-14 rounded-md' src={parces_small_logo} alt="parces solutions logo"/></span>
        <h1 className='self-center pl-1 font-semibold dark:text-white'>Parces Solutions</h1>
      </Link>
      <div className='flex gap-2 md:order-2'>
        <Link to='/sign-in'>
          <Button className='bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500' pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Collapse className='px-2 self-center'>
          <Navbar.Link >
            <Link className='px-2' to='/'>Home</Link>
            <Link className='px-2' to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header