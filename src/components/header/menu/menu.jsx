import { Link } from 'react-router-dom';
import { MENU } from '../../../db/menu';
import './menu.scss';
export const Menu = () => (
  <div className='menu' data-test-id='menu'>
    {MENU.map(({ id, path, name }) => (
      <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
        <span>{name}</span>
      </Link>
    ))}
  </div>
);
