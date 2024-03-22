import '@/styles/components/editor.scss'
import dynamic from 'next/dynamic';
import WriteButtons from './writeButtons';
import { useCurrentDraft } from './stepController';
import { useState } from 'react';
import { updateDraft } from '@/app/_actions/draftsActions';
import { useUserStore } from '@/app/_store/userStore';
import clsx from 'clsx';

const Editor = dynamic(() => import('./simpleEditor'), { ssr: false })

const Introduction = () => {
  const { handleNextStep, handlePrevStep, currentDraft, updateCurrentDraftObj } = useCurrentDraft()
  const { setAlert } = useUserStore()
  const [wordsCount, setWordsCount] = useState(0)
  const [introduction, setIntroduction] = useState(currentDraft?.introduction ?? '')
  const [isSaved, setIsSaved] = useState(true)

  const handleSetIntroduction = (data: string) => {
    setIntroduction(data.trim())
    updateCurrentDraftObj({ introduction: data.trim() });
    setIsSaved(false);
  }

  const saveData = async () => {
    const apiResponse = await updateDraft(currentDraft?._id!, { introduction })
    if (apiResponse.success) updateCurrentDraftObj({ introduction: apiResponse.data.draft?.introduction })
    setAlert(apiResponse.success ? 'success' : 'error', apiResponse.message)
  }

  const handleAutosave = async (data: string) => {
    const apiResponse = await updateDraft(currentDraft?._id!, { introduction: data });
    if (apiResponse.success) {
      updateCurrentDraftObj({ introduction: apiResponse.data.draft?.introduction })
      setIsSaved(true)
    }
  }

  const handleNext = async () => {
    if (!introduction) return setAlert('warn', 'Introduction cannot be empty')
    
    if(!isSaved) await saveData()
    handleNextStep()
  }

  const handlePrev = async () => {
    if (!isSaved) await saveData();
    handlePrevStep();
  }

  const handleSetWordsCount = (words: number) => {
    setWordsCount(words)
  }

  return (
    <>
      <div className="c-editor">
        <div className="c-editor__group">
          <p className="c-editor__label">
            Escribe la introduccion de tu articulo
          </p>

          <div className="c-editor__box">
            <Editor
              initialData={introduction}
              handleSetData={handleSetIntroduction}
              setWordCount={handleSetWordsCount}
              handleAutosave={handleAutosave}
            />
          </div>

          <div className="c-editor__state">
            <p className={clsx('c-editor__save', !isSaved && 'is-saving')}>
              {isSaved ? 'Saved' : 'Saving..'}
            </p>
            <p className='c-editor__word-count'>
              Words: <span>{wordsCount}</span>
            </p>
          </div>
        </div>
      </div>

      <WriteButtons handleNextStep={handleNext} handlePrevStep={handlePrev} />
    </>
  );
}

export default Introduction