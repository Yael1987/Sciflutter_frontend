import { useState } from 'react';

import { updateDraft } from '@/app/_actions/draftsActions';

import { useUserStore } from '@/app/_store/userStore';

import { useCurrentDraft } from './stepController';
import WriteButtons from './writeButtons';

const Editor = dynamic(() => import('./advanceEditor'), { ssr: false })
const EditorSimple = dynamic(() => import('./simpleEditor'), { ssr: false })

import '@/styles/components/editor.scss'
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const Content = () => {
  const { handleNextStep, handlePrevStep, currentDraft, token, updateCurrentDraftObj } = useCurrentDraft()
  const { setAlert } = useUserStore();
  const [contentWords, setContentWords] = useState(0)
  const [bibliographyWords, setBibliographyWords] = useState(0);
  const [content, setContent] = useState(currentDraft?.content ?? "")
  const [isSaved, setIsSaved] = useState(true);
  const [bibliography, setBibliography] = useState(currentDraft?.bibliography ?? "");
  const [bibliographyIsSaved, setBibliographyIsSaved] = useState(true);

  const handleSetContent = (data: string) => {
    setContent(data.trim());
    updateCurrentDraftObj({ content: data.trim() })
    setIsSaved(false);
  };

  const handleSetBibliography = (data: string) => {
    setBibliography(data.trim());
    updateCurrentDraftObj({ bibliography: data.trim() });
    setBibliographyIsSaved(false);
  };

  const saveData = async () => {
    const apiResponse = await updateDraft(currentDraft?._id!, { content, bibliography });
    if (apiResponse.success) updateCurrentDraftObj({ content: apiResponse.data.draft?.content, bibliography: apiResponse.data.draft?.bibliography });
    setAlert(apiResponse.success ? "success" : "error", apiResponse.message);
  };

  const handleAutosaveContent = async (data: string) => {
    const apiResponse = await updateDraft(currentDraft?._id!, { content: data });
    if (apiResponse.success) {
      updateCurrentDraftObj({ content: apiResponse.data.draft?.content })
      setIsSaved(true)
    }
  }

  const handleAutosaveBibliography = async (data: string) => {
    const apiResponse = await updateDraft(currentDraft?._id!, {
      bibliography: data,
    });
    if (apiResponse.success) {
      updateCurrentDraftObj({
        bibliography: apiResponse.data.draft?.bibliography,
      });
      setBibliographyIsSaved(true);
    }
  };

  const handleNext = async () => {
    if (!content || !bibliography) return setAlert("warn", "All fields are required");

    if (!isSaved || !bibliographyIsSaved) await saveData();
    handleNextStep();
  };

  const handlePrev = async () => {
    if (!isSaved || !bibliographyIsSaved) await saveData();
    handlePrevStep();
  };

  const handleSetContentWords = (words: number) => {
    setContentWords(words)
  }

  const handleSetBibliographyWords = (words: number) => {
    setBibliographyWords(words);
  };

  return (
    <>
      <div className="c-editor">
        <div className="c-editor__group">
          <p className="c-editor__label">Escribe el contenido de tu articulo</p>

          <div className="c-editor__box">
            <Editor
              initialData={content}
              handleSetData={handleSetContent}
              setWordCount={handleSetContentWords}
              handleAutosave={handleAutosaveContent}
              draftId={currentDraft?._id!}
              token={token}
            />
          </div>

          <div className="c-editor__state">
            <p className={clsx("c-editor__save", !isSaved && "is-saving")}>
              {isSaved ? "Saved" : "Saving.."}
            </p>
            <p className="c-editor__word-count">
              Words: <span>{contentWords}</span>
            </p>
          </div>
        </div>

        <div className="c-editor__group">
          <p className="c-editor__label">
            Escribe la bibliografia de tu articulo
          </p>

          <div className="c-editor__box">
            <EditorSimple
              initialData={bibliography}
              handleSetData={handleSetBibliography}
              setWordCount={handleSetBibliographyWords}
              handleAutosave={handleAutosaveBibliography}
            />
          </div>

          <div className="c-editor__state">
            <p
              className={clsx(
                "c-editor__save",
                !bibliographyIsSaved && "is-saving"
              )}
            >
              {bibliographyIsSaved ? "Saved" : "Saving.."}
            </p>
            <p className="c-editor__word-count">
              Words: <span>{bibliographyWords}</span>
            </p>
          </div>
        </div>
      </div>

      <WriteButtons handleNextStep={handleNext} handlePrevStep={handlePrev} />
    </>
  );
}

export default Content