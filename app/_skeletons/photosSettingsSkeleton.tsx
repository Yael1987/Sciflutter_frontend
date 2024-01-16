import "@/styles/components/skeletons.scss";

const PhotosSettingsSkeleton: React.FC = () => {
  return (
    <>
      <div className="user-settings-photo">
        <div className="skeleton--settings__photo--profile  skeleton--settings__photo"></div>

        <div>
          <p className="user-settings-photo__upload-label">Subir foto</p>
        </div>
      </div>

      <div className="user-settings-photo">
        <div className="skeleton--settings__photo--cover skeleton--settings__photo"></div>

        <div>
          <p className="user-settings-photo__upload-label">Subir foto</p>
        </div>
      </div>
    </>
  );
};

export default PhotosSettingsSkeleton;
