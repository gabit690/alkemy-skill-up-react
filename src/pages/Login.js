/* eslint-disable no-useless-escape */
import axios from 'axios';
import sweetAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

function Login() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const checkFormData = (email, password) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexEmail.test(email) || email !== "challenge@alkemy.org") {
      sweetAlert("error", "Invalid email", "error");
      return;
    }

    if (password !== "react") {
      sweetAlert("error", "Invalid password", "error");
      return;
    }
  }

  const submitHandler = (ev) => {
    ev.preventDefault();
    
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    checkFormData(email, password);

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        sweetAlert("Sucess", "Valid data", "success");
        const tokenReceived = res.data.token;
        localStorage.setItem('token', tokenReceived);
        navigate('/list');
      });
  }

  return (
    <div className='container bg-light mt-3 rounded'>
      {token && <Navigate to="/list" />}
      <h2 className='text-center pt-3'>Login form</h2>
      <form onSubmit={submitHandler} className="container-sm mx-auto d-flex flex-column py-4">
        <label>
          <span className='d-block text-center'>Email:</span>
          <input type="text" name="email" className='d-block w-50 mx-auto'/>
        </label>
        <br/>
        <label>
          <span className='d-block text-center'>Password:</span>
          <input type="password" name="password" className='d-block w-50 mx-auto'/>
        </label>
        <br/>
        <button type="submit" className='w-25 mx-auto'>Enter</button>
      </form>
    </div>
  );
}

export default Login;
