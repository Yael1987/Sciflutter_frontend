import ButtonLink from "../_components/buttonLink"
import { FormHOC, FormContainer, Header as FormHeader, Form, Link as FormLink, MoreOptions as FormMoreOptions, SubmitButton as FormSubmitButton } from "../_components/form";
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
          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Proporciona un correo electronico"
              className="form-formulary__input"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              className="form-formulary__input"
              name="password"
              id="password"
              required
            />
          </div>

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