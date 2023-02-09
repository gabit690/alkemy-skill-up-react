import { Link, Outlet } from 'react-router-dom';
import Searcher from './Searcher';

function Menu(props) {
  return <>
    <nav className='bg-dark d-flex py-2'>
      <Link to="/discover" className='text-light p-2 text-decoration-none'>Discover</Link>
      <Link to="/favorites" className='text-light p-2 text-decoration-none'>Favorites{`(${props.favorites})`}</Link>
      <Searcher />
    </nav>
    <Outlet />
  </>
}

export default Menu;
