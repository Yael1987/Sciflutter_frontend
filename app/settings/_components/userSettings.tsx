"use client"

import { useUserStore } from "@/app/_stores/userStore"
import dynamic from "next/dynamic"

import '@/styles/components/user-settings.scss'
import '@/styles/components/settings.scss'

const DynamicPhotosSettings = dynamic(() => import('./photosSettings'), { ssr: true, loading: ()=> <div>Cargando...</div> })

const UserSettings: React.FC = () => {
  const user = useUserStore(state => state.user)

  if (!user) return <div>
    <p>Fotos</p>
    <div>
      <div>
        Cargando...
      </div>
    </div>

    <div></div>
  </div>

  return (
    <div className="settings">
      <p className="settings__title">Fotos</p>

      <div className="settings__photos">
        <DynamicPhotosSettings photos={user.photos}/>
      </div>

      <div></div>
    </div>
  )
}

export default UserSettings