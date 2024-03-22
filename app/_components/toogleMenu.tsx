"use client"
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '../_store/userStore'

import { Article, Gear, Question, SignOut, X } from '@phosphor-icons/react'

import { signout } from '../_actions/authActions'

import '@/styles/components/menu.scss'
import Link from 'next/link'

const ToogleMenu: React.FC = () => {
  const { menuOpen, user, toogleMenuOpen, clearUser, setAlert } = useUserStore()
  const refMenu = useRef<HTMLElement>(null)
  const { refresh } = useRouter()

  const handleSignOut = () => {
    signout()
    clearUser()
    toogleMenuOpen()
    setAlert('success', 'Sesion cerrada')
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

        <button className="menu-aside__btn" onClick={toogleMenuOpen}>
          <X className="menu-aside__icon_close" size={24} />{" "}
        </button>
      </div>

      <menu>
        <li>
          <Link
            type="icon"
            href="/settings"
            className="menu-aside__link"
            onClick={toogleMenuOpen}
          >
            Configuracion <Gear size={20} className="menu-aside__icon" />
          </Link>
        </li>

        {user?.isAdmin && (<li>
          <Link
            type="icon"
            href="/requests"
            className="menu-aside__link"
            onClick={toogleMenuOpen}
          >
            Requests <Article size={20} className="menu-aside__icon" />
          </Link>
        </li>)}

        <li>
          <Link
            type="icon"
            href="/support"
            className="menu-aside__link"
            onClick={toogleMenuOpen}
          >
            Ayuda <Question size={20} className="menu-aside__icon" />
          </Link>
        </li>

        <li>
          <button className="menu-aside__btn" onClick={handleSignOut}>
            Cerrar sesion <SignOut size={20} className="menu-aside__icon" />{" "}
          </button>
        </li>
      </menu>
    </aside>
  );
}

export default ToogleMenu