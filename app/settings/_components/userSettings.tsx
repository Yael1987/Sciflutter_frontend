"use client"
import dynamic from "next/dynamic"
import clsx from "clsx"

import { useUserStore } from "@/app/_store/userStore"
import { useSettingsContext } from "@/app/_store/settingsContext"

import UserSettingsSkeleton from "@/app/_skeletons/userSettingsSkeleton"
import PhotosSettingsSkeleton from "@/app/_skeletons/photosSettingsSkeleton"

import "@/styles/components/user-settings.scss";
import "@/styles/components/settings.scss";

const DynamicPhotosSettings = dynamic(() => import('./photosSettings'), { ssr: true, loading: () => <PhotosSettingsSkeleton /> })

const UserSettings: React.FC = () => {
  const user = useUserStore(state => state.user)

  const { requestDataUpdate, pending } = useSettingsContext();

  if (!user) return <UserSettingsSkeleton />;
  
  return (
    <form
      action={requestDataUpdate}
      className="settings-section-main--container"
    >
      {user.status === "unconfirmed" && (
        <div className="settings__warn">
          Por favor confirma tu cuenta para poder cambiar tus datos
        </div>
      )}

      <p className="settings-section-heading--main">User</p>

      <div className="settings">
        <div className="settings__group">
          <p className="settings__title">Fotos</p>

          <div className="settings__photos">
            <DynamicPhotosSettings photos={user.photos} />
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
        <button className={clsx("settings__button", pending && "loading")}>
          {pending ? "Guardando..." : "Guardar cambios"}
        </button>
      </div>
    </form>
  );
}

export default UserSettings