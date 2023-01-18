import { Link, Outlet } from 'react-router-dom';

function Menu() {
  return (
    <nav className='bg-dark p-2'>
      <Link to="/discover" className='text-light p-2'>Discover</Link>
      <Link to="/favorites" className='text-light p-2'>Favorites</Link>
      <Outlet />
    </nav>
);
}

export default Menu;
