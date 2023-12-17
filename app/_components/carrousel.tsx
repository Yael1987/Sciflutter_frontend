import React from 'react'

import '@/styles/components/carrousel.scss'
import Button from './button'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr/CaretLeft'
import { CaretRight } from '@phosphor-icons/react/dist/ssr/CaretRight';

interface Props {
  children: React.ReactNode;
  showButtons: boolean
}

const Carrousel: React.FC<Props> = ({ children, showButtons }) => {
  return (
    <div className="carrousel">
      {showButtons && (
        <Button className="carrousel__button">
          <CaretLeft size={48} />
        </Button>
      )}

      <ul className="carrousel__list">{children}</ul>

      {showButtons && (
        <Button className="carrousel__button">
          <CaretRight size={48} />
        </Button>
      )}
    </div>
  );
}

export default Carrousel