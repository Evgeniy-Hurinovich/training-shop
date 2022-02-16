import { Link } from 'react-router-dom';
import { Contacts } from './contacts';
import { SocNet } from '../soc-panel';
import logo from '../../assets/logo.svg';
import { Menu } from './menu';
import { HeadUserIcon } from './user-icon';
import './header.scss';
export const Header = () => (
  <div className='header' data-test-id='header'>
    <div className='header-contacts'>
      <div className='wrapper'>
        <Contacts />
        <SocNet />
      </div>
    </div>
    <div className='header-nav'>
      <div className='wrapper'>
        <Link to='/' className='header-nav-logo-a' data-test-id='header-logo-link'>
          <img src={logo} alt='Logotipe' className='header-nav-logo' />
        </Link>
        <Menu />
        <HeadUserIcon /> 
      </div>
    </div>
  </div>
);
