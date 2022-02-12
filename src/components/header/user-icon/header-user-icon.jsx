import { Basket } from '../../cart/basket';

import { USER_BLOCK } from '../../../db/header-user-icon';

import './header-icons-nav.scss';

export const HeadUserIcon = () => {
  return (
    <div className='header-icons-nav'>
      {USER_BLOCK.map(({ id, imageSrc, href }) => (
        <a href={href} className='header-icons-nav-item' key={id}>
          <img src={imageSrc} alt='imgUser' className='header-icons-nav-item-img' />
        </a>
      ))}
      <Basket />
    </div>
  );
};
