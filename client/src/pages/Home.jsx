import earthandmoon from '../videos/earthandmoon.mp4'
import colorfulLogo from '../logo/colorfulLogo.png'

function Home() {
  return (
    <div className='flex justify-center'>
      <video src={earthandmoon} autoPlay loop muted/>
      <div className='hero-text' >
        {/* <h1 className= 'text-white text-8xl text-center'>Parces Solutions</h1>
        <p className='text-white text-4xl text-center mt-8 bg-blue-800 p-4 rounded-lg'>Together we will find a solution </p> */}
        <img src={colorfulLogo} className='rounded-3xl bg-transparent h-auto sm:min-w-sm md:min-w-md md:max-w-lg'></img>
      </div>
    </div>
  )
}

export default Home