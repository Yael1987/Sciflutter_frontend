import clsx from 'clsx'

import { usePathname } from 'next/navigation'

import Image from 'next/image'

import ButtonLink from "./buttonLink";

import '@/styles/components/navbar-menu.scss'

import { LoggedUser } from "../_interfaces/api"
import { UserStore, useUserStore } from "../_store/userStore";
import { BookmarksSimple, Chats, DotsThreeOutline, FilePlus } from "@phosphor-icons/react";
import Button from './button';

const NavBarUser: React.FC = () => { 
  const pathname = usePathname()
  const user = useUserStore((state: UserStore) => state.user) as LoggedUser
  const { toogleMenuOpen } = useUserStore()

  return (
    <nav className="c-navbar-menu">
      <ButtonLink
        type="icon"
        href="/saves"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/saves" && "is-active"
        )}
      >
        <BookmarksSimple
          size={32}
          weight="light"
          className="c-navbar-menu__icon"
        />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href="/drafts"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/drafts" && "is-active"
        )}
      >
        <FilePlus size={32} weight="light" className="c-navbar-menu__icon" />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href="/chats"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/chats" && "is-active"
        )}
      >
        <Chats size={32} weight="light" className="c-navbar-menu__icon" />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href={`/user/${user._id}`}
        className={clsx(
          "c-navbar-menu__avatar",
          pathname === `/user/${user._id}` && "is-active_img"
        )}
      >
        <Image
          src={user.photos.profile}
          alt="user-pic"
          style={{
            width: "100%",
            height: "100%",
          }}
          width={45}
          height={45}
        />
      </ButtonLink>

      <Button className="c-navbar-menu__link" onClick={toogleMenuOpen}>
        <DotsThreeOutline
          size={32}
          weight="light"
          className="c-navbar-menu__icon"
        />
      </Button>
    </nav>
  );
}

export default NavBarUser
