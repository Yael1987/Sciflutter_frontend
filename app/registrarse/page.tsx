import { Form, FormContainer, FormGroup, FormHOC, Header as FormHeader, Link as FormLink, MoreOptions as FormMoreOptions, SubmitButton as FormSubmitButton } from '../_components/form';
import { signup } from '../_actions/authActions';
import Link from 'next/link';

const Page: React.FC = async () => {
  return (
    <FormHOC serverAction={signup}>
      <FormContainer>
        <FormHeader
          title="Descubre más alla"
          description="Desbloquea todas las funcionalidades creando una cuenta, es rapido y gratis"
        />

        <Form>
          <FormGroup>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              placeholder="Introduce tu primer nombre"
              name="name"
              id="name"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              placeholder="Introduce tu apellido"
              name="lastName"
              id="lastName"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Proporciona un correo electronico"
              name="email"
              id="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Tu contraseña"
              name="password"
              id="password"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="passwordConfirm">
              Confirma tu contraseña
            </label>
            <input
              type="password"
              placeholder="Confirma tu contraseña"
              name="passwordConfirm"
              id="passwordConfirm"
              required
            />
          </FormGroup>

          <FormSubmitButton>Crear cuenta</FormSubmitButton>
        </Form>
      </FormContainer>

      <FormMoreOptions>
        <FormLink>
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" type="icon">
            Inicia sesion
          </Link>
        </FormLink>
      </FormMoreOptions>
    </FormHOC>
  );
}

export default Page