"use client"
import { CarouselCommercialServices } from '../components/CarouselCommercialServices';
import { CarouselResidentialServices } from '../components/CarouselResidentialServices';
import { ServiceList } from '../components/ServiceList';
import { ContactUsButton } from '../components/ContactUsButton';

function Services() {
  return (
    <>
      <div className='pt-28 pb-12 px-16 text-center text-2xl md:text-4xl font-bold'>
        <h2>We offer top-notch services in packaging, crating and more. Our team of experts have years of experience delivering the best solutions tailored just for you.</h2>
      </div>

      
      <ServiceList />
      <div className="my-12">
        <ContactUsButton />
      </div>

      <div className="flex justify-center">
        <div className="pt-12 pb-10 w-2/3 content-center text-center text-lg">
          <p>Our commercial services for warehousing and logistic are our bread and butter. We take pride in delivering the best possible solution at a cost that makes sense for you!</p>
        </div>
      </div>

      <CarouselCommercialServices />

      <div className="flex justify-center">
        <div className="pt-32 pb-10 w-2/3 content-center text-center text-lg">
          <p>
            We have extended our services to the residential sector in order to make your home needs come true, fast and at an affordable price!
          </p>
        </div>
      </div>

      <CarouselResidentialServices />

      
    </>
  )
}

export default Services