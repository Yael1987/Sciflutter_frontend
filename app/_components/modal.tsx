import React, { createContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Overlay from './overlay'
import { BaseComponent } from '../_interfaces/components'

import '@/styles/components/modal.scss'
import clsx from 'clsx'

const ModalContext = createContext({})

interface WindowProps extends BaseComponent{
  onClose?(): void;
  isModalOpen: boolean,
  onClick(): void
}

export const Window: React.FC<WindowProps> = ({ children, isModalOpen, onClick }) => {
  
  useEffect(() => {
    if (isModalOpen) { 
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  return createPortal(
    <div className={clsx('modal-cont-1', isModalOpen && 'modal-cont-1--open')}>
      <div className='modal-cont-2'>
        <div className='modal-cont-3'>
          <Overlay display={isModalOpen} />

          <div className='modal-cont-4'>
            <div className="modal-cont-5">
              <div className='modal-container'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}