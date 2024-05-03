import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";


export function ContactUsButton() {
  return (
    <Link to="https://forms.gle/ryVpQGpVFmZ7vk5e7">
        <Button className='h-20 w-48 my-auto mx-auto' color='failure' pill>
        Contact Us
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
    </Link>
  )
}