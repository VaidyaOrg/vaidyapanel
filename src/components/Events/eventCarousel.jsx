import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'home_img.png',
  'https://www.iitbhilai.ac.in/index.php?pid=img_helth_event_6',
  'https://www.iitbhilai.ac.in/index.php?pid=img_health_safety_weekend',
  'https://www.iitbhilai.ac.in/index.php?pid=img_helth_event_5',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings} className='justify-around w-[50vw] ml-20 mt-4'>
        {images.map((image, index) => (
            <img src={image} alt={`Slide ${index + 1}`} className="w-[50vw] h-[20vw] object-cover rounded-lg" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
