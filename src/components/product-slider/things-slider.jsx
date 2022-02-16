import arrUp from       '../../assets/arr-up.svg';
import arrDown from     '../../assets/arr-down.svg';
import { Slider } from  '../slider';
import './product-slider.scss';
export const ThingsSlider = ({ array }) => (
  <div className='slider-product'>
    <div className='side-block'>
      <div className='arr-up-down'>
        <img src={arrUp} alt='arr-up' className='arr-up' />
        <img src={arrDown} alt='arr-down' className='arr-down' />
      </div>
      <div className='small-img'>
        {array.map(({ id, imageSrc, nameImg }) => (
          <img key={id} src={imageSrc} className='small-img' alt={nameImg} />
        ))}
      </div>
    </div>
    <Slider array={array} />
  </div>
);
