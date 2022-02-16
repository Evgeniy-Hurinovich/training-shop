import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '../rating';
import './cards-item.scss';
export const CardItem = ({ card: { name, price, imageSrc, rating, sale, id }, productType }) => {
  return (
    <Link to={`/${productType}/${id}`} className='cards-item' data-test-id={`clothes-card-${productType}`}>
      {sale && <span className='sale'>{sale}</span>}
      <img src={imageSrc} alt='clothes' className='cards-item-img' />
      <div className='cards-item-name'>{name}</div>
      <div className='cards-item-price'>
        $ {price}
        <Rating rating={rating} />
      </div>
    </Link>
  );
};

