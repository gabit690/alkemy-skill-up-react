import { useParams } from 'react-router-dom';

function User() {
    const { name } = useParams();
    return (
        <h1>User {name}!</h1>
    );
}

export default User;
