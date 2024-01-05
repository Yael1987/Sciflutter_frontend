import { changePassword } from "@/app/_actions/authActions";
import { Form, FormContainer, FormHOC, Header as FormHeader, SubmitButton } from "@/app/_components/form";

interface Props{
  params: {
    token: string
  }
}

const Page: React.FC<Props> = ({ params }) => {
  return (
    <FormHOC serverAction={changePassword}>
      <FormContainer>
        <FormHeader
          title = "Recupera tu cuenta"
          description="Ingresa tu correo electronico para que podamos enviar un email con las instrucciones para que puedas recuperar el acceso a tu cuenta."
        />

        <Form>
          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor="password">
              Nueva contraseña
            </label>
            <input
              type="password"
              placeholder="Proporciona un correo electronico"
              className="form-formulary__input"
              name="password"
              id="password"
              required
            />
          </div>

          <div className="form-formulary-group">
            <label className="form-formulary__label" htmlFor="passwordConfirm">
              Confirmar contraseña
            </label>
            <input
              type="password"
              placeholder="Proporciona un correo electronico"
              className="form-formulary__input"
              name="passwordConfirm"
              id="passwordConfirm"
              required
            />
          </div>

          <input type="hidden" value={params.token} id="token" name="token"/>

          <SubmitButton>Enviar email de recuperación</SubmitButton>
        </Form>
      </FormContainer>
    </FormHOC>
  );
};

export default Page;
