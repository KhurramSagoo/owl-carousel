import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

import "./Block.css"; 
const HomeBlock = (props) => {
      console.log(props);
  return (
    <div className="block-container">
      
     
          <div className="content">
            <h2>{props.txt}</h2>
            <img src={props.img} alt="" />
          </div>
      
    </div>
  );
};

export default HomeBlock;
