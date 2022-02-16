import React from 'react';
import { Slider } from '../../slider';
import { SectionLinks } from './section-link';
import { SLIDER } from '../../../db/slider';
import './main-header.scss';
export const Header = () => {
  return (
    <div className='main-header'>
      <Slider array={SLIDER} />
      <SectionLinks />
    </div>
  );
};
