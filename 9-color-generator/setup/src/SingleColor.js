import React, { useState, useEffect } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const backgroundColor = rgb.join(',');
  const hexValue = `#${hexColor}`;

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${backgroundColor})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
      <HiOutlineClipboardCopy className='copy-btn' onClick={handleClick} />
    </article>
  );
};

export default SingleColor;
