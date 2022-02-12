import star from '../../assets/star.svg';
import starYel from '../../assets/star-yel.svg';

import './rating.scss';

const SIZ_STAR = {
  s: '14px',
  m: '22px',
};

const MAX_RATING = 5;

export const Rating = ({ size, rating }) => {
  const arrRaiting = Array.from(Array(MAX_RATING).keys());
  return (
    <div className='rating'>
      {arrRaiting.map((item, index) => (
        <img
          key={index.toString()}
          src={item < rating ? starYel : star}
          width={SIZ_STAR[size]}
          alt='star'
          className='rating-img'
        />
      ))}
    </div>
  );
};


