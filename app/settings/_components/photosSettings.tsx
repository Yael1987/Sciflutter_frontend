import { Window as ModalWindow } from '@/app/_components/modal';
import ProfileImageUpload from '@/app/_components/profileImageUpload';
import { useSettingsContext } from '@/app/_store/settingsContext';
import Image from 'next/image';
import { useState } from 'react'

interface Props{
  photos: {
    profile: string;
    cover: string;
  },
}

const PhotosSettings: React.FC<Props> = ({ photos }) => {
  const [profileImg, setProfileImg] = useState(photos.profile)
  const [coverImg, setCoverImg] = useState(photos.cover)
  
  const [previewImg, setPreviewImg] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const { addPicture } = useSettingsContext()

  const handleOnClickOverlay = () => {
    setIsOpenModal(state => !state)
  }

  const onSelectNewProfile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() ?? "";
      setPreviewImg(imageURL);
    });

    reader.readAsDataURL(file);
    setIsOpenModal(true)
  };

  const onSelectNewCover = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() ?? "";

      setCoverImg(imageURL);
      addPicture(new Blob([file], {type: "image/jpeg"}), 'cover');
    });

    reader.readAsDataURL(file);
  }

  const handleCropImg = (cropedImg: any) => {
    setProfileImg(cropedImg)
    setIsOpenModal(false)
  }

  const handleCancelCrop = () => {
    setPreviewImg('')
    setIsOpenModal(false)
  }

  const addNewProfileImg = (blob: Blob) => addPicture(blob, "profile");

  return (
    <>
      <div className="user-settings-photo">
        <Image
          src={profileImg}
          alt="profile picture pŕeview"
          className="user-settings-photo__profile-img"
          width={126}
          height={126}
        />

        <div>
          <input
            type="file"
            accept="image/*"
            name="selectProfile"
            id="selectProfile"
            className="user-settings-photo__upload-input"
            onChange={onSelectNewProfile}
          />
          <label
            htmlFor="selectProfile"
            className="user-settings-photo__upload-label"
          >
            Subir foto
          </label>
        </div>
      </div>

      <ModalWindow isModalOpen={isOpenModal} onClickOverlay={handleOnClickOverlay}>
        {previewImg && (
          <ProfileImageUpload imgSrc={previewImg} onCropImg={handleCropImg} onCancel={handleCancelCrop} setUpdateProfileImg={addNewProfileImg}/>
        )}
      </ModalWindow>

      <div className="user-settings-photo">
        <Image
          src={coverImg}
          alt="cover picture preview"
          className="user-settings-photo__cover-img"
          width={252}
          height={141}
        />

        <div>
          <input
            type="file"
            accept="image/*"
            name="selectCover"
            id="selectCover"
            className="user-settings-photo__upload-input"
            onChange={onSelectNewCover}
          />
          <label
            htmlFor="selectCover"
            className="user-settings-photo__upload-label"
          >
            Subir foto
          </label>
        </div>
      </div>
    </>
  );
}

export default PhotosSettings