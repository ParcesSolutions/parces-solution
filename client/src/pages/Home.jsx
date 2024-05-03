import earthandmoon from '../videos/earthandmoon.mp4'
import colorLogoNoBG from '../logo/colorLogoNoBG.png'
import colaboration from '../logo/pictures/colaboration.jpg'
import warehouse from '../logo/pictures/warehouse.jpg'
import teamwork from '../logo/pictures/teamwork.jpg'
import worker from '../logo/pictures/worker.jpg'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'


function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <video src={earthandmoon} autoPlay loop muted className='w-full'/>
        <div className='hero-text' >
          {/* <h1 className= 'text-white text-8xl text-center'>Parces Solutions</h1>
          <p className='text-white text-4xl text-center mt-8 bg-blue-800 p-4 rounded-lg'>Together we will find a solution </p> */}
          <img src={colorLogoNoBG} className='rounded-3xl bg-transparent h-auto sm:min-w-sm md:min-w-md md:max-w-lg' alt='Parces Solutions logo'></img>
        </div>
      </div>
      <div className='justify-center mx-auto min-h-screen mb-20'>
          <div className='text-center mt-40 text-4xl font-extrabold'>
            <h2>Our Company</h2>
          </div>

          <div className='flex flex-col lg:flex-row mx-16 md:mx-40 xl:mx-64 h-auto text-wrap'>
            <div className='text-center lg:text-left h-auto mt-12 md:mt-20 justify-center max-w-1/3 lg:mr-10'>
              <h3 className='font-semibold text-2xl md:text-3xl'>Who We Are</h3>
              <p className='text-wrap mt-4 max-h-54 text-md md:text-xl'>Parces Solutions is a dedicated and experienced team of professionals who specialize in warehouse services. We pride ourselves on delivering quality service with a personal approach to each of our clients.</p>
            </div>
            <img src={colaboration} alt='colaboration picture' className='size-max md:size-fit max-h-sm min-w-md md:max-w-md align-center md:py-10 mt-10 md:mt-5 rounded-3xl'></img>
          </div>

          <div className='flex flex-col-reverse lg:flex-row mx-16 md:mx-40 xl:mx-60 h-auto text-wrap'>
            <img src={warehouse} alt='warehouse picture' className='size-max md:size-fit max-h-sm min-w-md md:max-w-md align-center md:py-10 mt-10 md:mt-5 rounded-3xl'></img>
            <div className='text-center lg:text-left h-auto mt-12 md:mt-20 justify-center lg:ml-10'>
              <h3 className='font-semibold text-2xl md:text-3xl'>What We Do</h3>
              <p className='text-wrap mt-4 max-h-54 text-md md:text-xl'>Parces Solutions offer a wide range of specailized warehouse services, including packing, crating and custom logistics solutions. We are committed to delivering the best service in the industry.</p>
              <div className='flex justify-center lg:justify-start'>
                <Link to='/services'>
                  <Button className='justify-center lg:object-left mt-10 bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 text-white text-xl' outline color='hover:bg-blue-900'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row mx-16 md:mx-40 xl:mx-60 h-auto text-wrap'>
            <div className='text-center lg:text-left h-auto mt-12 md:mt-20 justify-center lg:mr-10'>
              <h3 className='font-semibold text-2xl md:text-3xl'>Our Mission</h3>
              <p className='text-wrap mt-4 max-h-54 text-md md:text-xl'>Our mission is to develop customized solutions that meet our clients needs, exceed their expectations and help them achieve success in their business goals..</p>
            </div>
            <img src={teamwork} alt='team shaking hands' className='size-max md:size-fit max-h-sm min-w-md md:max-w-md align-center md:py-10 mt-10 md:mt-5 rounded-3xl'></img>
          </div>
      </div>
      <div className="w-full h-96 bg-gray-100 mb-20 h-auto">
        <div className="text-center pt-10 text-4xl font-bold">Our Customers</div>
        <div className="flex items-center flex-col lg:flex-row gap-4 pt-10 pb-16 mx-10">
          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 hover:border-blue-800 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Small Businesses</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">We work with small businesses across a wide range of industries to provide customized warehouse solutions.</p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 hover:border-blue-800 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Large Corporations</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Our team has worked with several large corporations and has the expertise to deliver service that scales with your business.</p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 hover:border-blue-800 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">International Partners</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Parces Solutions has international partners and experience handling logistics for global companies.</p>
          </a>

          <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-200 hover:border-blue-800 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Individual Customers</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Our team is equiped to handle individual transportation and packaging requests to ensure the safety of your items.</p>
          </a>
        </div>
      </div>
      <div className="pb-24 flex flex-col items-center justify-center lg:flex-row gap-16">
        <div className="">
          <h2 className='text-2xl md:text-4xl font-bold'>Lets Get Your Business Moving Today!</h2>
          <h3 className='text-md md:text-xl mt-1'>Want a quote or have questions about our services?</h3>
          <p className='pt-4 text-2xl md:text-4xl'>Lets talk</p>
          <img src={worker} alt='warehouse worker holding ipad' className='mx-8 md:mx-autosize-max md:size-fit max-h-sm min-w-md md:max-w-md align-center mt-10 md:mt-8 '></img>
        </div>
        <div className="">

        <div className="">
        <Link to="https://forms.gle/1QuwwPyTb1Kp96Sg6">
          <Button className='h-20 w-48 my-auto mx-auto' color='failure' pill>
          Contact Us
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
    </Link>
        </div>


          {/* <form className="max-w-md mx-auto mt-20">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="contact_email" id="contact_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="contact_first_name" id="fcontact_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="contact_last_name" id="contact_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="contact_phone" id="contact_phone" className="pt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>

              </div>
              <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="contact_company" id="contact_company" className="pt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
              </div>
            </div>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know what service you need..." required></textarea>
            <div className="flex justify-center mt-4">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          </form> */}
        </div>
      </div>
    </>
  )
}

export default Home