import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function List() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  
  useEffect(() => {
    if (token == null) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Welcome to your list</h2>
    </>
  );
}

export default List;