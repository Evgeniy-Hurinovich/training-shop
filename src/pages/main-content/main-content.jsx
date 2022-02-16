import { Header } from      '../../components/content-blocks/header';
import { Servis } from      '../../components/content-blocks/servis';
import { Clothes } from     '../../components/content-blocks/clothes';
import { News } from        '../../components/content-blocks/news';
import { Subscribe } from   '../../components/content-blocks/subscribe';
import { Blog } from        '../../components/content-blocks/blog';
export const Main = () => (
  <>
    <div className='wrapper'>
      <Header />
      <Servis />
      <Clothes productType='women' />
      <Clothes productType='men' />
      <News />     
    </div>
    <Subscribe />
    <div className='wrapper'>
    <Blog />
    </div>    
  </>
);
