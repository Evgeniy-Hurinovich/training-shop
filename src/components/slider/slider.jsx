import prev from '../../assets/prev.svg';
import next from '../../assets/next.svg';

import './slider.scss';



export const Slider = ({ array }) => {
  return (
    <div className='slider'>
      {array.map(({ id, text, imageSrc, title, nameImg}) => (
        <div key={id} className='slider-block'>
          <img src={prev} alt='prev' className='arr-prev-img' />
          <img src={next} alt='next' className='arr-next-img' />
          <img src={imageSrc} alt={nameImg} className='slider-img' />
          {title && text && (
            <div className='btn'>
              <div className='title'>{title}</div>
              <div className='text'>{text}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};