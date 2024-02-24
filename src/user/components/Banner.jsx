
import { ArrowBack } from '@mui/icons-material';
import image from '../../assets/Auditorium.jpg'
import image1 from '../../assets/bussiness.jpg'
import image2 from '../../assets/confrence1.jpg'


import { Carousel } from 'flowbite-react';

function Banner() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl="" rightControl="">
        <img src={image} alt="..." />
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
       
      </Carousel>
    </div>
  )
}
export default Banner