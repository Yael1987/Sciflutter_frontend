import dynamic from 'next/dynamic'

import { HeadingSecondary } from '../_components/headings'

import '@/styles/pages/write.scss'
import { getOneDraft } from '../_actions/draftsActions'
import { getToken } from '../_actions/userActions'

const DynamicStepController = dynamic(()=> import('./_components/stepController'))

interface Props{
  searchParams: {
    draftId: string
  }
}

const Page: React.FC<Props> = async ({ searchParams }) => {
  let draft;
  const token = await getToken()

  if (searchParams.draftId) {  
    draft = await getOneDraft(searchParams.draftId)
  } else {
    draft = null
  }

  return (
    <div className='l-write'>
      <HeadingSecondary>Escribe un nuevo articulo</HeadingSecondary>
      <DynamicStepController draft={draft} token={token}/>
    </div>
  )
}

export default Page