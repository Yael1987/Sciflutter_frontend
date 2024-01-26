"use client"
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import ButtonLink from './buttonLink';

import "@/styles/components/navbar-menu.scss";

const NavBarPublic: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="c-navbar-menu">
      <ButtonLink
        href="/login"
        type="icon"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/login" && "is-active"
        )}
      >
        Iniciar sesion
      </ButtonLink>

      <ButtonLink
        href="/registrarse"
        type="icon"
        className={clsx(
          "c-navbar-menu__signup",
          pathname === "/registrarse" && "is-active"
        )}
      >
        Registrarse
      </ButtonLink>
    </nav>
  );
}

export default NavBarPublic