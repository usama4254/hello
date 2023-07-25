import React from 'react';
import atest from "../src/image.js/img.png";
import  img from "../src/image.js/iimg.png";
import imf from "../src/image.js/immg.png";

const Latest = () => {
  return (
    <>
      <div className='Special_title mt-5'>
        <h1>Latest News</h1>
      </div>

      <div className='container'>
        <div className='row imgg'>
          <div className='col-4 latest_img'>
            <div className='image-container'>
              <img src={atest} alt="" />
            </div>
            <span>eCommerce</span>
            <h3>The Factory is Making its Own Mobile Chipset</h3>
            <span>Admin / 20 October 2020</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className='col-4 latest_img'>
            <div className='image-container'>
              <img src={img} alt="" />
            </div>
            <span>eCommerce</span>
            <h3>The Factory is Making its Own Mobile Chipset</h3>
            <span>Admin / 20 October 2020</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className='col-4 latest_img'>
            <div className='image-container'>
              <img src={imf} alt="" />
            </div>
            <span>eCommerce</span>
            <h3>The Factory is Making its Own Mobile Chipset</h3>
            <span>Admin / 20 October 2020</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Latest;
