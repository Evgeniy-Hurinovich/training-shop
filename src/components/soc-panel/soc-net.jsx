import React from 'react';
import { SOCIAL } from '../../db/soc-net';
import './social-network.scss';
export const SocNet = ({ size }) => {
  return (
    <div className='social-network'>
      {SOCIAL.map(({ id, imageSrc, href }) => (
        <a href={href} className='social-network-item' key={id}>
          <img src={imageSrc} width={size} alt='imgUser' className='social-network-item-img' />
        </a>
      ))}
    </div>
  );
};
