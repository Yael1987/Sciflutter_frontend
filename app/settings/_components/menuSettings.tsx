"use client"
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Link from "next/link";

import "@/styles/components/settings-menu.scss";

const MenuSettings: React.FC = () => {
  const pathname = usePathname().split('/').at(-1)

  return (
    <ul className="c-settings-menu">
      <li>
        <Link
          href="/settings"
          className={clsx(
            "c-settings-menu__link",
            pathname === "settings" && "c-settings-menu__link_active"
          )}
        >
          Public
        </Link>
      </li>

      <li>
        <Link
          href="/settings/seguridad"
          className={clsx(
            "c-settings-menu__link",
            pathname === "seguridad" && "c-settings-menu__link_active"
          )}
        >
          Security
        </Link>
      </li>
    </ul>
  );
}

export default MenuSettings