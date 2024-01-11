import { Window as ModalWindow } from '@/app/_components/modal';
import ProfileImageUpload from '@/app/_components/profileImageUpload';
import Image from 'next/image';
import React, { useState } from 'react'

interface Props{
  photos: {
    profile: string;
    cover: string;
  },
  setProfileData(blob: Blob): void
  setCoverData(blob: Blob): void
}

const PhotosSettings: React.FC<Props> = ({ photos, setProfileData, setCoverData }) => {
  const [profileImg, setProfileImg] = useState(photos.profile)
  const [coverImg, setCoverImg] = useState(photos.cover)
  const [previewImg, setPreviewImg] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOnClickOverlay = () => {
    setIsOpenModal(state => !state)
  }

  const onSelectFile = (e: React.FormEvent<HTMLInputElement>) => {
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

  const onSelectCover = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() ?? "";
      setCoverImg(imageURL);
      setCoverData(new Blob([file], {type: "image/jpeg"}));
    });

    reader.readAsDataURL(file);
  }

  const handleCropImg = (cropedImg: any) => {
    setProfileImg(cropedImg)
    setIsOpenModal(false)
  }

  const handleCancel = () => {
    setPreviewImg('')
    setIsOpenModal(false)
  }

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
            onChange={onSelectFile}
          />
          <label
            htmlFor="selectProfile"
            className="user-settings-photo__upload-label"
          >
            Subir foto
          </label>
        </div>
      </div>

      <ModalWindow isModalOpen={isOpenModal} onClick={handleOnClickOverlay}>
        {previewImg && (
          <ProfileImageUpload imgSrc={previewImg} onCropImg={handleCropImg} onCancel={handleCancel} setProfileData={setProfileData}/>
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
            onChange={onSelectCover}
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