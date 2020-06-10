import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from "../actions";
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = props => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input className="input" type="text"
            placeholder="Nombre" name='name'
            onChange={handleInput}
          />
          <input className="input" type="text"
            placeholder="Correo" name='email'
            onChange={handleInput}
          />
          <input className="input" type="password"
            placeholder="Contraseña" name='password'
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to='/register'>
          Iniciar sesión
      </Link>
      </section>
    </section>
  );
}

const mapDispatchToPros = {
  registerRequest,
}

export default connect(null, mapDispatchToPros)(Register);