import clsx from 'clsx'

import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link';

import { UserStore, useUserStore } from "../_store/userStore";

import { LoggedUser } from "../_interfaces/api"

import { BookmarksSimple, DotsThreeOutline, FilePlus } from "@phosphor-icons/react";

import '@/styles/components/navbar-menu.scss'
import { NotificationProvider } from '../_store/notificationsContext';
import NotificationsButton from './notificationsButton';


const NavBarUser: React.FC = () => { 
  const pathname = usePathname()
  const user = useUserStore((state: UserStore) => state.user) as LoggedUser
  const { toogleMenuOpen } = useUserStore()

  return (
    <nav className="c-navbar-menu">
      <Link
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
      </Link>

      <Link
        type="icon"
        href="/drafts"
        className={clsx(
          "c-navbar-menu__link",
          pathname === "/drafts" && "is-active"
        )}
      >
        <FilePlus size={32} weight="light" className="c-navbar-menu__icon" />
      </Link>
      
      <NotificationProvider>
        <NotificationsButton />
      </NotificationProvider>

      <Link
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
      </Link>

      <button className="c-navbar-menu__btn" onClick={toogleMenuOpen}>
        <DotsThreeOutline
          size={32}
          weight="light"
          className="c-navbar-menu__icon"
        />
      </button>
    </nav>
  );
}

export default NavBarUser
