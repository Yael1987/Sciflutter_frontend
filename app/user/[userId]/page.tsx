import React from 'react'

import Profile from '../_components/profile';
import { getUserById } from '@/app/_utils/getData';
import ProfileContent from '../_components/profileContent';

interface Props{
  params: {
    userId: string
  }
}

const Page: React.FC<Props> = ({ params }) => {
  const user = getUserById(params.userId)

  if(!user) return <p>Usuario no encontrado</p>

  return (
    <>
      <Profile user={user} />

      <ProfileContent user={user}/>
    </>
  )
}

export default Page