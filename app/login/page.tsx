import { FormHOC, FormContainer, Header as FormHeader, Form, Link as FormLink, MoreOptions as FormMoreOptions, SubmitButton as FormSubmitButton, FormGroup } from "../_components/form";
import { login } from "../_actions/authActions";
import Link from "next/link";

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
              placeholder="Your email"
              name="email"
              id="email"
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
            />
          </FormGroup>

          <FormSubmitButton>Login</FormSubmitButton>
        </Form>
      </FormContainer>

      <FormMoreOptions>
        <FormLink>
          You are not register yet?{" "}
          <Link href="/signup" type="icon">
            Sign up
          </Link>
        </FormLink>

        <FormLink>
          Forgot your password?{" "}
          <Link href="/forgot-password" type="icon">
            Recover account
          </Link>
        </FormLink>
      </FormMoreOptions>
    </FormHOC>
  );
}

export default Page