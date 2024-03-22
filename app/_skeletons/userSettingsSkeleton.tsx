import PhotosSettingsSkeleton from "./photosSettingsSkeleton";

import "@/styles/skeletons/settings.scss";

const UserSettingsSkeleton: React.FC = () => {
  return (
    <div className="s-settings__container">
      <p className="settings-section-heading--main">User</p>

      <div className="settings">
        <div className="settings__group">
          <p className="settings__title">Fotos</p>

          <div className="settings__photos">
            <PhotosSettingsSkeleton />
          </div>
        </div>

        <div className="settings__row">
          <div className="settings__group">
            <p className="settings__title">Nombre</p>
            <div className="s-settings__input">Nombre</div>
          </div>

          <div className="settings__group">
            <p className="settings__title">Apellido</p>
            <div className="s-settings__input">Apellida</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsSkeleton