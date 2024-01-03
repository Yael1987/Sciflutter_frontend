import { User } from '@/app/_interfaces/api'
import React from 'react'
import Profile from './profile'
import ProfileContent from './profileContent'
import dynamic from 'next/dynamic'
import { checkCookieExist } from '@/app/_actions/authActions'

const DynamicProfileButtons = dynamic(() => import('./profileButtons'), {ssr: false})

interface Props{
  user: User
}

const ProfilePage: React.FC<Props> = ({ user }) => {  
  return (
    <>
      <Profile user={user}>
        {checkCookieExist() && <DynamicProfileButtons user={user} />}
      </Profile>

      <ProfileContent user={user} />
    </>
  );
}

export default ProfilePage