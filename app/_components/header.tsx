'use client'

import React from 'react'

import Image from 'next/image'

import Navbar from './navbar'

import textLogo from '@/public/img/logos/text.svg'
import '@/styles/layout/header.scss'
import ButtonLink from './buttonLink'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <ButtonLink type='icon' href='/'>
          <Image
            src={textLogo}
            className="header__navigation-logo"
            alt="Sciflutter logo"
            style={{
              width: "auto",
              height: "3.2rem",
            }}
          />
        </ButtonLink>

        <Navbar />
      </div>
    </header>
  );
}

export default Header