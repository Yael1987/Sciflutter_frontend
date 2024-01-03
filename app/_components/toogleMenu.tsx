"use client"
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '../_stores/userStore'

import { Gear, Question, SignOut, X } from '@phosphor-icons/react'

import Button from './button'
import ButtonLink from './buttonLink'

import { signout } from '../_actions/authActions'

import '@/styles/components/menu.scss'

const ToogleMenu: React.FC = () => {
  const { menuOpen, user, toogleMenuOpen, clearUser } = useUserStore()
  const refMenu = useRef<HTMLElement>(null)
  const { refresh } = useRouter()

   const handleSignOut = () => {
     signout()
     clearUser()
     toogleMenuOpen()
     refresh()
   };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuOpen) {
        if (
          refMenu.current &&
          !refMenu.current.contains((e.target as HTMLElement))
        ) {
          toogleMenuOpen()
        }
      }
    }

    document.addEventListener('click', handleOutsideClick)
    
    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [refMenu, menuOpen, toogleMenuOpen])

  return (      
    <aside className={clsx("menu-aside", menuOpen && "menu-aside--open")} ref={refMenu}>
      <div className="menu-aside__header">
        <p className="menu-aside__header-name">
          {user?.name} {user?.lastName}
        </p>

        <Button className="menu-aside__btn" onClick={toogleMenuOpen}>
          {" "}
          <X className="menu-aside__icon" size={24} />{" "}
        </Button>
      </div>

      <menu>
        <li>
          <ButtonLink
            type="icon"
            href="settings"
            className="menu-aside__link"
            onClick={toogleMenuOpen}
          >
            Configuracion <Gear size={20} className="menu-aside__icon" />
          </ButtonLink>
        </li>

        <li>
          <ButtonLink
            type="icon"
            href="support"
            className="menu-aside__link"
            onClick={toogleMenuOpen}
          >
            Ayuda <Question size={20} className="menu-aside__icon" />
          </ButtonLink>
        </li>

        <li>
          <Button className="menu-aside__btn" onClick={handleSignOut}>
            Cerrar sesion <SignOut size={20} className="menu-aside__icon" />{" "}
          </Button>
        </li>
      </menu>
    </aside>
  );
}

export default ToogleMenu