import React from 'react';

import { SERVICE } from '../../../db/service';
import { ServisMenu } from './servis-item/servis-menu';


import './benefits.scss';

export const Servis = () => {
  return (
    <div className='benefits'>
      {SERVICE.map(({ id,  title, text, imageSrc, name }) => (
        <ServisMenu key={id} img={imageSrc} title={title} text={text} name={name} />
      ))}
    </div>
  );
};
