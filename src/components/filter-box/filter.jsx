import { FilterCheck } from './filter-check';
import { FILTER } from      '../../db/filter';
import './filter.scss';
export const FilterSeting = () => (
  <div className='filter-block'>
    <div className='color'>
      <div className='title'>COLOR</div>
      <div className='filters'>
        {FILTER.color.map(({ id, color }) => (
          <FilterCheck key={id} id={id} text={color} type='color' />
        ))}
      </div>
    </div>
    <div className='size'>
      <div className='title'>SIZE</div>
      <div className='filters'>
        {FILTER.size.map(({ id, size }) => (
          <FilterCheck key={id} id={id} text={size} type='size' />
        ))}
      </div>
    </div>
    <div className='brand'>
      <div className='title'>BRAND</div>
      <div className='filters'>
        {FILTER.brand.map(({ id, brand }) => (
          <FilterCheck key={id} id={id} text={brand} type='brand' />
        ))}
      </div>
    </div>
    <div className='price'>
      <div className='title'>PRICE</div>
      <div className='filters'>
        {FILTER.prise.map(({ id, price }) => (
          <FilterCheck key={id} id={id} text={price} type='price' />
        ))}
      </div>
    </div>
  </div>
);
