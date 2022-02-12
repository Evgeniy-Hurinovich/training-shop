import { Link } from 'react-router-dom';

import { CardItem } from '../../card-item';
import { THINGS } from '../../../db/things';
import { NAV_CLOTHES } from '../../../db/nav-clothes';

import './clothes.scss';

export const Clothes = ({ productType }) => (
  <div className='clothes' data-test-id={`clothes-${productType}`}>
    <div className='clothes-header'>
      <div className='clothes-title'>{`${productType}’s`}</div>
      <div className='clothes-menu'>
        {NAV_CLOTHES.map(({ id, name }) => (
          <div className='clothes-menu-item' key={id}>
            {name}
          </div>
        ))}
      </div>
    </div>
    <div className='cards'>
      {THINGS[productType]
        .filter((_, index) => index <= 7)
        .map((card) => (
          <CardItem key={card.id} card={card} productType={productType} />
        ))}
    </div>
    <Link to={`/${productType}`} className='cards-item-a'>
      <button className='clothes-button' type='button'>
        SEE ALL
      </button>
    </Link>
  </div>
);


