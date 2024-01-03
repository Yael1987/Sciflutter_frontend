import Image from 'next/image'

import ButtonLink from './buttonLink'

import textLogo from '@/public/img/logos/text.svg'
import '@/styles/layout/header.scss'

interface Props{
  children: React.ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="header">
      <div className="header__navigation">
        <ButtonLink type="icon" href="/">
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
          
        {children}
      </div>
    </header>
  );
}

export default Header