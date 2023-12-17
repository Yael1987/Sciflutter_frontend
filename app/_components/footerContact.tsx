import React from 'react'

import { Envelope, FacebookLogo, GithubLogo, Globe } from '@phosphor-icons/react/dist/ssr'

import '@/styles/layout/footer.scss'
import ButtonLink from './buttonLink'

const FooterContact: React.FC = () => {
  return (
    <div className="footer__contact">
      <p className="footer__contact-heading">Contactame</p>

      <ul className="footer__contact-list">
        <li>
          <ButtonLink href="#" className="footer__contact-link" type="icon">
            <FacebookLogo size={32} weight="duotone" />
          </ButtonLink>
        </li>

        <li>
          <ButtonLink href="#" className="footer__contact-link" type="icon">
            <Globe size={32} weight="duotone" />
          </ButtonLink>
        </li>

        <li>
          <ButtonLink href="#" className="footer__contact-link" type="icon">
            <Envelope size={32} weight="duotone" />
          </ButtonLink>
        </li>

        <li>
          <ButtonLink href="#" className="footer__contact-link" type="icon">
            <GithubLogo size={32} weight="duotone" />
          </ButtonLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterContact