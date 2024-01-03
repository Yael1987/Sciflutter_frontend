import ButtonLink from './buttonLink';

import "@/styles/components/navigation.scss";

const NavBarPublic: React.FC = () => {
  return (
    <nav className="menu">
      <ButtonLink href="/login" type="icon" className="menu__text">
        Iniciar sesion
      </ButtonLink>

      <ButtonLink href="/registrarse" type="icon" className="menu__text--main">
        Registrarse
      </ButtonLink>
    </nav>
  );
}

export default NavBarPublic