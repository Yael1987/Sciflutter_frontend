import React from 'react'
import FormSection from '../_components/formSection'

import '@/styles/components/skeletons.scss'

const FormSkeleton = () => {
  return (
    <FormSection>
      <div className='skeleton--form'></div>
    </FormSection>
  )
}

export default FormSkeleton