import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' >Login</NavLink>
          </li>
          <li>
            <NavLink to='/list' >List</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
