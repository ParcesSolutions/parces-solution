import { Carousel } from "flowbite-react";
import fence from '../videos/fence.mp4';
import bathroom_remodel from '../videos/bathroom _remodel.mp4';



export function CarouselResidentialServices() {
  return (
    <div className="flex justify-center pb-24">
        <div className="w-3/5 sm:h-64 xl:h-80 2xl:h-98 bg-black">
        <Carousel slide={false}>
            <video src={fence} autoPlay loop muted className='object-scale-down'/>
            <video src={bathroom_remodel} autoPlay loop muted className='object-scale-down'/>
        </Carousel>
        </div>
    </div>
  )
}