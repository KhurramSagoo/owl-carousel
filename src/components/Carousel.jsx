import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import './carousel.css'

const Carousel = () => {
  const settings = {
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    smartSpeed: 1000,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dotContainerClass: "owl-dot-container",

  };
  const data = [

    {
      id: 1,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate, necessitatibus ",
      path: photo4,
    },
    {
      id: 2,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate, necessitatibus  ",
      path: photo5,
    },
    {
      id: 3,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cupiditate, necessitatibus  ",
      path: photo6,
    },


  ];

  return (


    <OwlCarousel className="owl-theme" {...settings}>
      {data.map((item, id) => (
        <div key={id}>
          <p className='txt'>{item.text} </p>
          <img className='img' src={item.path} alt={item.id} />
        </div>

      ))}


    </OwlCarousel>

  )
}

export default Carousel