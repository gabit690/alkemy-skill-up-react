/* eslint-disable no-useless-escape */
import axios from 'axios';
import sweetAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Login() {

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
    <>
      <h2>Login form</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email:</span>
          <br />
          <input type="text" name="email" />
        </label>
        <br/>
        <label>
          <span>Password:</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br/>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}

export default Login;
