import dynamic from 'next/dynamic';

import { revalidateTag } from 'next/cache';

import { BaseComponent } from '../_interfaces/components'

import "@/styles/layout/settings-section.scss";

const DynamicMenuSettings = dynamic(() => import('./_components/menuSettings'))

const Layout: React.FC<BaseComponent> = ({ children }) => {
  revalidateTag('logged-user')

  return (
    <section className="settings-section">
      <h3 className="settings-section-heading">Configuracion</h3>

      <div className="settings-section-container">
        <DynamicMenuSettings />

        {children}
      </div>
    </section>
  )
}

export default Layout