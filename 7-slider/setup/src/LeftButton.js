import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

const LeftButton = ({ setIndex, index }) => {
  return (
    <button
      className='prev'
      onClick={() => {
        setIndex(index - 1);
      }}>
      <FiChevronLeft />
    </button>
  );
};

export default LeftButton;
