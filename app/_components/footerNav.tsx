import React from 'react'

import Link from 'next/link'

import '@/styles/layout/footer.scss'
import ButtonLink from './buttonLink';

interface NavLinks {
  category: string,
  links: {tag: string, link: string}[]
}

const FOOTER_NAV_LINKS: NavLinks[] = [
  {
    category: "Ayuda y soporte",
    links: [
      { tag: "Preguntas frecuentes", link: "#" },
      { tag: "Reportar un problema", link: "#" },
      { tag: "Uso de cookies", link: "#" },
      { tag: "Terminos y condiciones", link: "#" },
      { tag: "Aviso de privacidad", link: "#" }
    ]
  },
  {
    category: "Saber más",
    links: [
      { tag: "Landing page", link: "#" },
      { tag: "API", link: "#" },
      { tag: "Desarrollo", link: "#" },
      { tag: "Documentacion", link: "#" }
    ]
  },
  {
    category: "Cuenta",
    links: [
      { tag: "Inicio", link: "#" },
      { tag: "Recuperacion", link: "#" },
      { tag: "Conviertete en autor", link: "#" },
      { tag: "Autores", link: "#" },
      { tag: "Buscar articulo", link: "#" },
      { tag: "Cerrar sesión", link: "#" }
    ]
  }
];

const FooterNav: React.FC = () => {
  return (
    <nav className="footer-nav">
      {FOOTER_NAV_LINKS.map((links) => (
        <div className="footer-nav__col" key={links.category}>
          <p className="footer-nav__col-title">{links.category}</p>

          <ul className="footer-nav__list">
            {links.links.map((link) => (
              <li key={link.tag}>
                <ButtonLink
                  href={link.link}
                  type="icon"
                  className="footer-nav__list-link"
                >
                  {link.tag}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default FooterNav