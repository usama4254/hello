import React, { useState } from 'react';

const BestSeller = () => {
  const [color, setColor] = useState(null);

  const handleLinkClick = (index) => {
    setColor(index);
  };

  return (
    <>
      <div className='Special_title mt-5'>
        <h1>Best Sellers</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <ul className='Best_seller_displ'>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 0 ? 'red' : 'black',
                    borderBottom: color === 0 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(0)}
                >
                  Cameras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 1 ? 'red' : 'black',
                    borderBottom: color === 1 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(1)}
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 2 ? 'red' : 'black',
                    borderBottom: color === 2 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(2)}
                >
                  Audio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 3 ? 'red' : 'black',
                    borderBottom: color === 3 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(3)}
                >
                  Computers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 4 ? 'red' : 'black',
                    borderBottom: color === 4 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(4)}
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: color === 5 ? 'red' : 'black',
                    borderBottom: color === 5 ? '2px solid red' : 'none',
                  }}
                  onClick={() => handleLinkClick(5)}
                >
                  Accesories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
