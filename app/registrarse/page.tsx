import React from 'react'

import FormSection from '../_components/formSection'

const Page: React.FC = () => {
  const signUpUser = async (formData: FormData) => {
    "use server"

    const registerData = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirm: formData.get('passwordConfirm')
    }
    
    const response = await fetch(`http://127.0.0.1:4000/api/v1/users/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerData)
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <FormSection>
      <div className="form">
        <div className="form-header">
          <h2 className="form-header__main">Descubre mas allá</h2>
          <p className="form-header__text">
            Desbloquea todas las funcionalidades creando una cuenta
          </p>
        </div>

        <form className="form-formulary" action={signUpUser}>
          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='name'>Nombre</label>
            <input
              type="text"
              placeholder="Introduce tu primer nombre"
              className="form-formulary__input"
              name='name'
              id='name'
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='lastName'>Apellido</label>
            <input
              type="text"
              placeholder="Introduce tu apellido"
              className="form-formulary__input"
              name='lastName'
              id='lastName'
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='email'>Email</label>
            <input
              type="text"
              placeholder="Proporciona un correo electronico"
              className="form-formulary__input"
              name='email'
              id='email'
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='password'>Contraseña</label>
            <input
              type="password"
              placeholder="Tu contraseña"
              className="form-formulary__input"
              name='password'
              id='password'
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='passwordConfirm'>Confirma tu contraseña</label>
            <input
              type="password"
              placeholder="Confirma tu contraseña"
              className="form-formulary__input"
              name='passwordConfirm'
              id='passwordConfirm'
            />
          </div>

          <button className="form-formulary__button">Crear cuenta</button>
        </form>
      </div>

      <div className="form-section__links">
        <p className="form-section__link">
          ¿Ya tienes cuenta? <a href="#">Iniciar sesion</a>
        </p>
      </div>
    </FormSection>
  );
}

export default Page