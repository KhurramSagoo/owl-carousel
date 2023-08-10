import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import HomeBlock from './HomeBlock';
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import './cat.css'

const Cat = () => {
    const settings = {
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1200,
        smartSpeed: 500,
        dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dotContainerClass: "owl-dot-container",
        
      };
      const data = [
        {
          id: 1,
          text: "Beautiful sunset over the mountains",
          path: photo1,
        },
        {
          id: 2,
          text: "Adorable puppy playing in the park",
          path: photo2,
        },
        {
          id: 3,
          text: "Delicious assortment of fruits",
          path: photo3,
        },
      ];
 
  return (
    

    <OwlCarousel className="owl-theme" {...settings}>
    {/* {data.map((item) => (
      <HomeBlock key={item.id} txt={item.text} img={item.path} />
    ))} */}

    <img src={photo1} alt="" />
    <img src={photo2} alt="" />
    <img src={photo3} alt="" />
  </OwlCarousel>

  )
}

export default Cat