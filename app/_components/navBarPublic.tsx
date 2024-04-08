"use client"
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import "@/styles/components/navbar-menu.scss";

const NavBarPublic: React.FC = () => {
  const pathname = usePathname()

  return (
    <nav className="c-navbar-menu">
      <Link
        href="/login"
        type="icon"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/login" && "is-active"
        )}
      >
        Iniciar sesion
      </Link>

      <Link
        href="/registrarse"
        type="icon"
        className={clsx(
          "c-navbar-menu__signup",
          pathname === "/registrarse" && "is-active"
        )}
      >
        Registrarse
      </Link>
    </nav>
  );
}

export default NavBarPublic