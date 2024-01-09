"use client"
import ButtonLink from "@/app/_components/buttonLink";
import { usePathname } from "next/navigation";

import "@/styles/components/settings-menu.scss";
import clsx from "clsx";

const MenuSettings: React.FC = () => {
  const pathname = usePathname().split('/').at(-1)

  return (
    <ul className="settings-menu">
      <li>
        <ButtonLink
          href="/settings"
          type="icon"
          className={clsx(
            "settings-menu__link",
            pathname === "settings" && "settings-menu__link--active"
          )}
        >
          Perfil
        </ButtonLink>
      </li>

      <li>
        <ButtonLink
          href="/settings/seguridad"
          type="icon"
          className={clsx(
            "settings-menu__link",
            pathname === "seguridad" && "settings-menu__link--active"
          )}
        >
          Seguridad
        </ButtonLink>
      </li>
    </ul>
  );
}

export default MenuSettings