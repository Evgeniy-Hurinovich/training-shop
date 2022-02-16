import './filter-item.scss';
export const FilterCheck = ({ text, id, type }) => (
  <label className='checkbox-label' htmlFor={`${type}-${id}`} key={id}>
    <input type='checkbox' className='checkbox-input' id={`${type}-${id}`} />
    <span className='checkbox-text'>{text}</span>
  </label>
);