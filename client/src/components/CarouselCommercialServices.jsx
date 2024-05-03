import { Carousel } from 'flowbite-react'
import laser from '../logo/pictures/laser.jpg';
import painting_after from '../logo/pictures/painting_after.jpg';
import painting_before from '../logo/pictures/painting_before.jpg';
import welding from '../videos/welding.mp4';


export function CarouselCommercialServices() {
  return (
    <div className="flex justify-center pb-14">
        <div className="w-3/5 sm:h-64 xl:h-80 2xl:h-98 bg-black">
        <Carousel slide={false}>
            <img src={laser} className='object-scale-down' alt="..." />
            <video src={welding} autoPlay loop muted className='object-scale-down'/>
            <img src={painting_before} className='object-scale-down' alt="..." />
            <img src={painting_after} className='object-scale-down' alt="..." />
        </Carousel>
        </div>
    </div>
  )
}