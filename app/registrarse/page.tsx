import { Form, FormContainer, FormHOC, Header as FormHeader, Link as FormLink, MoreOptions as FormMoreOptions, SubmitButton as FormSubmitButton } from '../_components/form';
import { signup } from '../_actions/authActions';
import ButtonLink from '../_components/buttonLink';

const Page: React.FC = async () => {
  return (
    <FormHOC serverAction={signup}>
      <FormContainer>
        <FormHeader
          title="Descubre más alla"
          description="Desbloquea todas las funcionalidades creando una cuenta, es rapido y gratis"
        />

        <Form>
          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='name'>Nombre</label>
            <input
              type="text"
              placeholder="Introduce tu primer nombre"
              className="form-formulary__input"
              name='name'
              id='name'
              required
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
              required
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor='email'>Email</label>
            <input
              type="email"
              placeholder="Proporciona un correo electronico"
              className="form-formulary__input"
              name='email'
              id='email'
              required
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
              required
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
              required
            />
          </div>

          <FormSubmitButton>Crear cuenta</FormSubmitButton>
        </Form>
      </FormContainer>

      <FormMoreOptions>
        <FormLink>
          ¿Ya tienes cuenta?{" "}
          <ButtonLink href="/login" type="icon">
            Inicia sesion
          </ButtonLink>
        </FormLink>
      </FormMoreOptions>
    </FormHOC>
  );
}

export default Page