import { Link, Outlet } from 'react-router-dom';

function UserLayout() {
    return (
        <>
            <Link to="/users/A">User A</Link>
            <br />
            <Link to="/users/B">User B</Link>
            <br />
            <Link to="/users/C">User C</Link>
            <Outlet />
        </>
    );
}

export default UserLayout;
