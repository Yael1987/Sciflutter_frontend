import React from 'react'

import Link from 'next/link'

import styles from '@/styles/layout/footer.module.scss'

const FooterNav: React.FC = () => {
  return (
    <nav className={styles['footer-nav']}>
      <div className={styles['footer-nav__col']}>
        <p className={styles['footer-nav__col-title']}>Ayuda y soporte</p>
        <ul className={styles['footer-nav__list']}>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Reportar un problema
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Uso de cookies
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Terminos y condiciones
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Aviso de privacidad
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles['footer-nav__col']}>
        <p className={styles['footer-nav__col-title']}>Saber más</p>
        <ul className={styles['footer-nav__list']}>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Landing page
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              API
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Desarrollo
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Documentacion
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles['footer-nav__col']}>
        <p className={styles['footer-nav__col-title']}>Cuenta</p>
        <ul className={styles['footer-nav__list']}>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Recuperacion
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Conviertete en autor
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Autores
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Buscar articulo
            </Link>
          </li>
          <li>
            <Link href='#' className={styles['footer-nav__list-link']}>
              Cerrar session
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default FooterNav