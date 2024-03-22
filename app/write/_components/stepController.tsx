'use client'
import { createContext, useContext, useState } from "react"

import SetBaseArticle from "./setBaseArticle"
import Introduction from "./introduction"
import Content from "./content"
import Publish from "./publish"

import '@/styles/layout/write-container.scss'
import { Draft } from "@/app/_interfaces/api"
import Requested from "./requested"

interface DraftObj {
  _id?: string;
  name: string;
  author: string;
  discipline: string;
  image?: string;
  resume?: string;
  createdAt?: string;
  introduction?: string;
  content?: string;
  bibliography?: string;
  images?: string[];
  requested?: boolean;
}

export interface NewData {
  name?: string;
  author?: string;
  discipline?: string;
  image?: string;
  resume?: string;
  introduction?: string;
  content?: string;
  bibliography?: string;
  images?: string[];
  requested?: boolean;
}

interface Props{
  draft: Draft | null,
  token: string | null
}

interface IDraftContext {
  currentDraft: DraftObj | null;
  updateCurrentDraftObj(newData: NewData): void
  handleNextStep(): void
  handlePrevStep(): void,
  step: number,
  token: string | null
}

const DraftContext = createContext<IDraftContext>({
  currentDraft: null,
  updateCurrentDraftObj: (newData: NewData) => { },
  handleNextStep: () => { },
  handlePrevStep: () => { },
  step: 1,
  token: null
})

const StepController: React.FC<Props> = ({ draft, token }) => {
  const [step, setStep] = useState(1)
  const [currentDraft, setCurrentDraft] = useState(draft)
  let stepComponent

  const updateCurrentDraftObj = (newData: NewData) => {
    setCurrentDraft(draft => ({ ...draft, ...(newData as Draft) }))
  }

  const handleNextStep = () => {
    if (step >= 5) return

    setStep(step => step += 1)
  }

  const handlePrevStep = () => {
    if (step === 1) return
    
    setStep(step => step -= 1)
  }

  switch (step) {
    case 1:
      stepComponent = <SetBaseArticle />
      break
    case 2:
      stepComponent = <Introduction />
      break
    case 3:
      stepComponent = <Content />
      break
    case 4:
      stepComponent = <Publish />
      break
    case 5:
      stepComponent = <Requested />
      break
    default: 
      stepComponent = <SetBaseArticle />
      break
  }

  return (
    <DraftContext.Provider value={{ currentDraft, updateCurrentDraftObj, handleNextStep, handlePrevStep, step, token }}>
      <div className="l-write-container">
        {stepComponent}
      </div>
    </DraftContext.Provider>
  );
}

export const useCurrentDraft = () => {
  const context = useContext(DraftContext)

  return context
}

export default StepController