"use client"

import { useUserStore } from "@/app/_stores/userStore"
import dynamic from "next/dynamic"

import '@/styles/components/user-settings.scss'
import '@/styles/components/settings.scss'
import { useState } from "react"
import { getToken, revalidateUsers } from "@/app/_actions/userActions"

const DynamicPhotosSettings = dynamic(() => import('./photosSettings'), { ssr: true, loading: () => <div>Cargando...</div> })
const VALID_INPUTS=['name', 'lastName', 'description', 'discipline']

const UserSettings: React.FC = () => {
  const user = useUserStore(state => state.user)
  const [globalFormData, setGlobalFormData] = useState<FormData>(new FormData())
  const [notification, setNotification] = useState({ message: '', error: false })
  const setUser = useUserStore(state => state.setUser)

  if (!user) return <div>
    <p>Fotos</p>
    <div>
      <div>
        Cargando...
      </div>
    </div>

    <div></div>
  </div>

  const updatePublicData = async (formData: FormData) => {
    const formEntries = Array.from(formData.keys())

    formEntries.forEach(entry => {
      if (formData.get(entry) && VALID_INPUTS.includes(entry)) {
        globalFormData.append(entry, (formData.get(entry) as string));
      };
    })
    
    const response = await fetch('http://127.0.0.1:4000/api/v1/users/me', {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${await getToken()}`
      },
      body: globalFormData,
      cache: 'no-store'
    })

    const data = await response.json()

    if (data.success) {
      setNotification({ message: 'Datos actualizados correctamente', error: false })
      setUser(data.data)
      revalidateUsers()
    } else {
      setNotification({message: 'Ocurrio un error al actualizar los datos', error: true})
    }
  }

  const addProfilePicture = (blob: Blob) => {
    if (globalFormData.has('profile')) {
      globalFormData.append('profile', blob)
    } else {
      globalFormData.set('profile', blob)
    }
  }
  
  const addCoverPicture = (blob: Blob) => {
    if (globalFormData.has('cover')) {
      globalFormData.append('cover', blob)
    } else {
      globalFormData.set('cover', blob)
    }
  }
  
  return (
    <form
      action={updatePublicData}
      className="settings-section-main"
    >
      {user.status === "unconfirmed" && (
        <div className="settings__warn">
          Por favor confirma tu cuenta para poder cambiar tus datos
        </div>
      )}

      {notification.message && (
        <div className={`settings__${notification.error ? "error" : 'success'}`}>{notification.message}</div>
      )}

      <p className="settings-section-heading--main">User</p>

      <div className="settings">
        <div className="settings__group">
          <p className="settings__title">Fotos</p>

          <div className="settings__photos">
            <DynamicPhotosSettings photos={user.photos} setProfileData={addProfilePicture} setCoverData={addCoverPicture}/>
          </div>
        </div>

        <div className="settings__row">
          <div className="settings__group">
            <label className="settings__title" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              defaultValue={user.name}
              id="name"
              name="name"
              className="settings__input"
            />
          </div>

          <div className="settings__group">
            <label className="settings__title" htmlFor="lastName">
              Apellido
            </label>
            <input
              type="text"
              defaultValue={user.lastName}
              id="lastName"
              name="lastName"
              className="settings__input"
            />
          </div>
        </div>
      </div>

      {user.role === "author" && (
        <>
          <div className="settings__line"></div>

          <p className="settings-section-heading--main">Autor</p>

          <div className="settings">
            <div className="settings__row">
              <div className="settings__group settings__group--single">
                <label className="settings__title" htmlFor="discipline">
                  Disciplina
                </label>
                <input
                  type="text"
                  defaultValue={user.discipline ?? ""}
                  id="discipline"
                  name="discipline"
                  className="settings__input"
                  placeholder="Selecciona tu disciplina"
                />
              </div>
            </div>

            <div className="settings__row">
              <div className="settings__group">
                <label className="settings__title" htmlFor="discipline">
                  Descripcion
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols={30}
                  rows={3}
                  defaultValue={user.description ?? ""}
                  className="settings__input"
                  placeholder="Escribe una descripcion breve"
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="settings__submit-container">
        <button>Guardar cambios</button>
      </div>
    </form>
  );
}

export default UserSettings