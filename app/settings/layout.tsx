import dynamic from 'next/dynamic';

import { revalidateTag } from 'next/cache';

import { BaseComponent } from '../_interfaces/components'

import "@/styles/layout/settings-section.scss";
import SettingsProvider from '../_store/settingsContext';
import { Metadata } from 'next';

const DynamicSettingsMenu = dynamic(() => import('./_components/menuSettings'))

export const metadata: Metadata = {
  title: "Settings",
};

const Layout: React.FC<BaseComponent> = ({ children }) => {
  revalidateTag('logged-user')

  return (
    <section className="l-settings-section">
      <h3 className="l-settings-section__heading">Configuracion</h3>

      <div className="l-settings-section__container">
        <DynamicSettingsMenu />

        <div className="l-settings-section__main">
          <SettingsProvider>
            {children}
          </SettingsProvider>
        </div>
      </div>
    </section>
  )
}

export default Layout