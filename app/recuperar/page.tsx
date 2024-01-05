import { Header as FormHeader, FormContainer, FormHOC, Form, SubmitButton } from '../_components/form'
import { requestResetPassword } from '../_actions/authActions'

const Page = () => {
  return (
    <FormHOC serverAction={requestResetPassword}>
      <FormContainer>
        <FormHeader
          title="Recupera tu cuenta"
          description="Ingresa tu correo electronico para que podamos enviar un email con las instrucciones para que puedas recuperar el acceso a tu cuenta."
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

          <SubmitButton>Enviar email de recuperación</SubmitButton>
        </Form>
      </FormContainer>
    </FormHOC>
  );
}

export default Page