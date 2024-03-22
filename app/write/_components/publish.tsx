import Image from "next/image";
import { useCurrentDraft } from "./stepController"
import WriteButtons from "./writeButtons"

import "@/styles/components/editor.scss";
import { useState } from "react";
import { publishDraft, uploadDraftImg } from "@/app/_actions/draftsActions";
import { useUserStore } from "@/app/_store/userStore";

const Publish = () => {
  const { handleNextStep, handlePrevStep, currentDraft, updateCurrentDraftObj } = useCurrentDraft()
  const { setAlert } = useUserStore()
  const [articleImg, setArticleImg] = useState(currentDraft?.image!)
  const [formData, setFormData] = useState(new FormData())

  const setUploadImage = (img: Blob) => {
    if (formData.has('image')) {
      formData.set('image', img, 'image')
    } else {
      formData.append('image', img, 'image')
    }
  }

  const handleDeleteImage = () => {
    if (formData.has("image")) {
      formData.set("image", '/img/default-article.png');
    } else {
      formData.append("image", '/img/default-article.png');
    }
  }

  const handleUploadImg = (e: React.FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
    
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const imageURL = reader.result?.toString() ?? "";

      setArticleImg(imageURL);
      setUploadImage(new Blob([file], { type: "image/jpeg" }))
    });

    reader.readAsDataURL(file);
  }

  const handleNext = async () => {
    if(currentDraft?.requested) return setAlert('warn', 'You cannot request two publishes of the same draft')

    if (formData.has('name')) {
      formData.set('name', currentDraft?.name!)
    } else {
      formData.append('name', currentDraft?.name!)
    }
    
    const updateResponse = await uploadDraftImg(currentDraft?._id!, formData);

    setAlert(updateResponse.success ? 'success' : 'error', updateResponse.message);

    if (!updateResponse.success) return

    updateCurrentDraftObj({ image: updateResponse.data.draft?.image })

    const requestResponse = await publishDraft(currentDraft?._id!)

    setAlert(requestResponse.success ? 'success' : 'error', requestResponse.message);

    if (!requestResponse.success) return

    updateCurrentDraftObj({ requested: true });
    handleNextStep()
  }

  return (
    <>
      <div className="c-editor is-center">
        <div className="c-editor__group">
          <p className="c-editor__label">Select a image for preview card</p>

          <div className="c-editor__upload">
            <div className="c-editor__img-container">
              <Image
                src={articleImg}
                width={250}
                height={334}
                alt="Main image"
              />
            </div>

            <div className="c-editor__upload-file">
              <input
                type="file"
                name="articleImage"
                id="articleImage"
                onChange={handleUploadImg}
              />
              <label htmlFor="articleImage">Upload an image</label>
            </div>

            <button className="c-editor__delete" onClick={handleDeleteImage}>
              Delete image
            </button>
          </div>
        </div>

        <div className="c-editor__group">
          <p>
            If everything it&apos;s okay you can request the publish of your
            article by clicking the <strong>next button</strong>.
          </p>
          <p>
            Remember that once requested the publish you cannot edit the draft
            sent or the article published. If your article is accepted to be
            published the draft will be removed from your list of drafts, this
            is to prevent different articles from relying on the same images and
            information.
          </p>
        </div>
      </div>

      <WriteButtons
        handleNextStep={handleNext}
        handlePrevStep={handlePrevStep}
      />
    </>
  );
}

export default Publish