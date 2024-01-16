import clsx from 'clsx'

import { usePathname } from 'next/navigation'

import Image from 'next/image'

import ButtonLink from "./buttonLink";

import '@/styles/components/navigation.scss'

import { User } from "../_interfaces/api"
import { UserStore, useUserStore } from "../_store/userStore";
import { BookmarksSimple, Chats, DotsThreeOutline, FilePlus } from "@phosphor-icons/react";
import Button from './button';

const NavBarUser: React.FC = () => { 
  const pathname = usePathname()
  const user = useUserStore((state: UserStore) => state.user) as User
  const { toogleMenuOpen } = useUserStore()

  return (
    <nav className="menu">
      <ButtonLink
        type="icon"
        href="/saves"
        className={clsx(
          "menu__icon",
          pathname === "/saves" && "menu__icon-active"
        )}
      >
        <BookmarksSimple size={32} weight="light" />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href="/drafts"
        className={clsx(
          "menu__icon",
          pathname === "/write" && "menu__icon-active"
        )}
      >
        <FilePlus size={32} weight="light" />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href="/chats"
        className={clsx(
          "menu__icon",
          pathname === "/chats" && "menu__icon-active"
        )}
      >
        <Chats size={32} weight="light" />
      </ButtonLink>

      <ButtonLink
        type="icon"
        href={`/user/${user._id}`}
        className={clsx(
          "menu__avatar",
          pathname === `/user/${user._id}` && "menu__icon-active"
        )}
      >
        <Image
          src={user.photos.profile}
          alt="user-pic"
          style={{
            width: "100%",
            height: "100%",
          }}
          width={32}
          height={32}
        />
      </ButtonLink>

      <Button className="menu__icon" onClick={toogleMenuOpen}>
        <DotsThreeOutline size={32} weight="light" />
      </Button>
    </nav>
  );
}

export default NavBarUser
