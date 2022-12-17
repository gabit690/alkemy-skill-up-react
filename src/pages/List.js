import { useEffect } from "react";
import { Link, useNavigate, Navigate } from 'react-router-dom';

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
      {!token && <Navigate to="/" />}
      <div className="row">
      <div class="card" style={{width: '18rem'}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" class="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
    </>

  );
}

export default List;