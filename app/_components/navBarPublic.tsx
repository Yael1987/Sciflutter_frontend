import React from 'react'
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import ButtonLink from './buttonLink';

import "@/styles/components/navigation.scss";

const NavBarPublic: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="menu">
      <ButtonLink
        href="/login"
        type="icon"
        className={clsx(
          "menu__text",
          pathname === "/login" && "menu__text-active"
        )}
      >
        Iniciar sesion
      </ButtonLink>

      <ButtonLink
        href="/registrarse"
        type="icon"
        className={clsx(
          "menu__text--main",
          pathname === "/registrarse" && "menu__text--main-active"
        )}
      >
        Registrarse
      </ButtonLink>
    </nav>
  );
}

export default NavBarPublic