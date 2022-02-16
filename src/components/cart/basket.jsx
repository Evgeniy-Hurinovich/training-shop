import basket from '../../assets/basket.svg';
import './cart.scss';
export const Basket = () => (
  <div className='cart'>
    <img src={basket} alt='cart' className='cart-img' />
  </div>
);
