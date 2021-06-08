import React from 'react';
import ImageOne from '../images/beef.jpg';
import ImageTwo from '../images/chicken.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Beef Steak</h2>
          <p className='mb-2'>delicious and affordable</p>
          <span>$16</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Tanduri Chicken</h2>
          <p className='mb-2'>Crispy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
