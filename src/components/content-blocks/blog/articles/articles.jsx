import React from 'react';
import { Link } from 'react-router-dom';
import './blog-item.scss';
export const BlogArticles = ({ img, name, title, text, href }) => {
  return (
    <div className='blog-item'>
      <img src={img} alt={name} className='item-img' />

      <div className='description-block'>
        <div className='item-title'>{title}</div>
        <div className='item-text'>{text}</div>
        <Link to={href} className='more'>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

