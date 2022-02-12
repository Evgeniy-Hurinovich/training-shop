//рендерит женские вещи при нажатии на закладку WOMEN
//CardItem формирует рейтинг звезд 
//для рендеринга берет фото и данные из db массива-файла-базы фото-THINGS 
import { useState } from      'react';
import { Header } from        '../../components/item-header';
import { ProdFilter } from    '../../components/prod-filter';
import { FilterSeting } from  '../../components/filter-box';
import { CardItem } from      '../../components/card-item';
import { THINGS } from        '../../db/things';

import                        './products-page.scss';
export const ItemPage = ({ productType }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const onToggleFilter = () => {setIsFilterVisible(!isFilterVisible);};

  return (
    <div className='products-page' data-test-id={`products-page-${productType}`}>
      <Header productType={productType} />
      <div className='wrapper'>
        <ProdFilter onToggleFilter={onToggleFilter} isFilterVisible={isFilterVisible} />
        {isFilterVisible && <FilterSeting />}
        <div className='cards'>
          {THINGS[productType].map((card) => (
            <CardItem key={card.id} card={card} productType={productType} />
          ))}
        </div>
      </div>
    </div>
  );
};
