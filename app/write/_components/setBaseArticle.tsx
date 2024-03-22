import { useUserStore } from '@/app/_store/userStore';

import '@/styles/components/editor.scss'
import { useState } from 'react';
import { useCurrentDraft } from './stepController';
import WriteButtons from './writeButtons';
import { Draft } from '@/app/_interfaces/api';
import { createDraft, updateDraft } from '@/app/_actions/draftsActions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SetBaseArticle = () => {
  const { currentDraft, updateCurrentDraftObj, handleNextStep, handlePrevStep } = useCurrentDraft()
  const { setAlert, user } = useUserStore()
  // const [id, setId] = useState(currentDraft?._id ?? null)
  const [name, setName] = useState(currentDraft?.name ?? '')
  const [discipline, setDiscipline] = useState(currentDraft?.discipline ?? '')
  const [resume, setResume] = useState(currentDraft?.resume ?? '')
  const id = currentDraft?._id ?? null;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleNext = async () => {
    if ([name, resume].includes('')) return setAlert('warn', 'All fields are required')

    if(!discipline && !user?.discipline) return setAlert('warn', 'A discipline is required')

    let draft: Draft | null;
    let apiResponse;
    const newData = {
      name, 
      discipline: discipline ?? user?.discipline,
      resume
    }

    if (!id) {
      // const draft 
      // Se creara el borrador
      apiResponse = await createDraft(newData)
      const params = new URLSearchParams(searchParams);

      if (apiResponse.success) { 
        params.set("draftId", apiResponse.data.draft!._id);
        
        push(`${pathname}?${params.toString()}`, { scroll: false });
      } else {
        setAlert('error', apiResponse.message)
        return 
      }
    } else {
      // Se actualizara el borrador
      apiResponse = await updateDraft(id, newData)
    }

    // Se actualiza el borrador actual y se pasa al siguiente paso
    if (apiResponse.success) draft = apiResponse.data.draft!;
    else draft = null;

    updateCurrentDraftObj({ ...draft });

    setAlert(apiResponse.success ? 'success' : 'error', apiResponse.message);
    handleNextStep()
  }

  return (
    <>
      <div className="c-editor">
        <div className="c-editor__group">
          <label htmlFor="draft-name" className="c-editor__label">
            Nombra tu articulo
          </label>
          <input
            type="text"
            id="draft-name"
            className="c-editor__input_text is-lg"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="c-editor__group">
          <label htmlFor="draft-discipline" className="c-editor__label">
            Escribe la disciplina
          </label>
          <input
            type="text"
            id="draft-discipline"
            className="c-editor__input_text is-md"
            required
            name="discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          />
        </div>

        <div className="c-editor__group">
          <label htmlFor="draft-resume" className="c-editor__label">
            Escribe un resumen de tu articulo
          </label>
          <textarea
            name="resume"
            id="draft-resume"
            cols={30}
            rows={5}
            className="c-editor__input_text is-base"
            required
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          ></textarea>
        </div>
      </div>

      <WriteButtons
        handleNextStep={handleNext}
        handlePrevStep={handlePrevStep}
      />
    </>
  );
}

export default SetBaseArticle