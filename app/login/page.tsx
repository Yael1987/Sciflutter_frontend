import { permanentRedirect } from "next/navigation"

import { checkCookieExist } from "../_actions/authActions"

import FormSection from "../_components/formSection"
import LoginForm from "./_components/loginForm"
import ButtonLink from "../_components/buttonLink"

const Page: React.FC = async () => {
  if (checkCookieExist()) permanentRedirect('/')

  return (
    <FormSection>
      <div className="form">
        <div className="form-header">
          <h2 className="form-header__main">Descubre mas allá</h2>
          <p className="form-header__text">
            Desbloquea todas las funcionalidades creando una cuenta
          </p>
        </div>

        <LoginForm />
      </div>

      <div className="form-section__links">
        <p className="form-section__link">
          ¿Aun no tienes cuenta? <ButtonLink href="/registrarse" type="icon">Registrarse</ButtonLink>
        </p>
        <p className="form-section__link">
          ¿Olvidaste tu contraseña? <ButtonLink href="/" type="icon">Recuperarla</ButtonLink>
        </p>
      </div>
    </FormSection>
  );
}

export default Page