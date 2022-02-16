import './benefits-item.scss';
export const ServisMenu = ({ img, title, text, name }) => {
  return (
    <div className='benefits-item'>
      <img src={img} alt={name} className='benefits-item-img' />
      <div className='benefits-item-description'>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

