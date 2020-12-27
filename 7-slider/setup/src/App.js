import React, { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import Title from './Title';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <Title title={'reviews'} />
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) position = 'activeSlide';
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          )
            position = 'lastSlide';
          return (
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        <LeftButton setIndex={setIndex} index={index} />
        <RightButton setIndex={setIndex} index={index} />
      </div>
    </section>
  );
}

export default App;
