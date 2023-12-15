'use client'
import React from "react"
import clsx from 'clsx'

import { usePathname } from 'next/navigation'

import Image from 'next/image'

import ButtonLink from "./buttonLink";

import {
  BookmarksSimple,
  Chats,
  FilePlus,
  UserCircleGear,
} from '@phosphor-icons/react'

import '@/styles/components/navigation.scss'

import { user } from "../_utils/data"

const Navbar: React.FC = () => { 
  const pathname = usePathname()

  return (
    <nav className='menu'>
      <ButtonLink
        href='/saves'
        type='icon'
        className={clsx(
          'menu__icon',
          pathname === '/saves' && 'menu__icon-active'
        )}
      >
        <BookmarksSimple size={32} weight='light' />
      </ButtonLink>

      <ButtonLink
        type='icon'
        href='/write'
        className={clsx(
          'menu__icon',
          pathname === '/write' && 'menu__icon-active'
        )}
      >
        <FilePlus size={32} weight='light' />
      </ButtonLink>

      <ButtonLink
        type='icon'
        href='/chats'
        className={clsx(
          'menu__icon',
          pathname === '/chats' && 'menu__icon-active'
        )}
      >
        <Chats size={32} weight='light' />
      </ButtonLink>

      <ButtonLink
        type='icon'
        href='/me'
        className={clsx(
          'menu__avatar',
          pathname === '/me' && 'menu__icon-active'
        )}
      >
        <Image
          src={user.photos.profile}
          alt='user-pic'
          style={{
            width: '100%',
            height: '100%',
          }}
          width={32}
          height={32}
        />
      </ButtonLink>

      <ButtonLink
        type='icon'
        href='/settings'
        className={clsx(
          'menu__icon',
          pathname === '/settings' && 'menu__icon-active'
        )}
      >
        <UserCircleGear size={32} weight='light' />
      </ButtonLink>
    </nav>
  )
}

export default Navbar
