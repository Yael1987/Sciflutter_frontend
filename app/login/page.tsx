import ButtonLink from "../_components/buttonLink"
import { FormHOC, FormContainer, Header as FormHeader, Form, Link as FormLink, MoreOptions as FormMoreOptions, SubmitButton as FormSubmitButton, FormGroup } from "../_components/form";
import { login } from "../_actions/authActions";

const Page: React.FC = async () => {
  return (
    <FormHOC serverAction={login}>
      <FormContainer>
        <FormHeader
          title="Descubre más allá"
          description="Inicia sesion para poder acceder a todas las funciones disponibles."
        />

        <Form>
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
            <label htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              name="password"
              id="password"
              required
            />
          </FormGroup>

          <FormSubmitButton>Iniciar sesión</FormSubmitButton>
        </Form>
      </FormContainer>

      <FormMoreOptions>
        <FormLink>
          ¿Aun no tienes cuenta?{" "}
          <ButtonLink href="/registrarse" type="icon">
            Registrarse
          </ButtonLink>
        </FormLink>

        <FormLink>
          ¿Olvidaste tu contraseña?{" "}
          <ButtonLink href="/recuperar" type="icon">
            Recuperarla
          </ButtonLink>
        </FormLink>
      </FormMoreOptions>
    </FormHOC>
  );
}

export default Page