import React from 'react'

import Image from 'next/image'

import FooterContact from './footerContact'
import FooterNav from './footerNav'

import mainLogo from '@/public/img/logos/main.svg'
import '@/styles/layout/footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-col'>
        <div className='footer__description'>
          <Image
            src={mainLogo}
            alt='Main logo'
            className='footer__description-logo'
            style={{
              width: 'auto'
            }}
          />

          <p className='footer__description-text'>Encuentra articulos acerca de diversos temas, conoce mas sobre sus autores, publica tus propios textos para convertirte en uno de nuestros autores. No esperes mas para descubrir lo que SciFlutter tiene para ofrecer.</p>
        </div>
    
        <FooterContact />
      </div>
    
      <div className='footer-col'>
        <FooterNav />
      </div>
    </footer>
  )
}

export default Footer