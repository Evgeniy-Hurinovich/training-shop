import filterImg from     '../../assets/filter-img.svg';
import change from        '../../assets/change.svg';
import arrowDwn from      '../../assets/arrowDwn.svg';
import btnGrid from       '../../assets/btnGrid.svg';
import btnList from       '../../assets/btnList.svg';
import './products-settings.scss';
export const ProdFilter = ({ onToggleFilter, isFilterVisible }) => (
  <div className='products-settings'>
    <button className='filter' onClick={onToggleFilter} type='button'>
      {!isFilterVisible ? (<img src={filterImg} alt='filter' className='filter-img' />) : 
      (<img src={change} alt='cross' className='cross' />)}
      FILTER
    </button>
    <div className='view'>
      <img src={btnList} alt='view-list' className='view-list-img' />
      <img src={btnGrid} alt='view-grid' className='view-grid-img' />
    </div>
    <div className='bestsellers'>
      BESTSELLERS
      <img src={arrowDwn} alt='arrow' className='arrow-img' />
    </div>
  </div>
);