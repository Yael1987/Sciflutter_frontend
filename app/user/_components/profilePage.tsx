import dynamic from 'next/dynamic'

import type { User } from '@/app/_interfaces/api'

import { checkAuthorFollow } from '@/app/_actions/featuresActions'
import { checkCookieExist } from '@/app/_actions/authActions'

import Profile from './profile'
import ProfileContent from './profileContent'

const DynamicProfileButtons = dynamic(() => import('./profileButtons'), { ssr: false })

interface Props{
  user: User
}

const ProfilePage: React.FC<Props> = async ({ user }) => { 
  const isFollow = await checkAuthorFollow(user._id);

  return (
    <>
      <Profile user={user}>
        {checkCookieExist() && (
          <DynamicProfileButtons user={user} follow={isFollow} />
        )}
      </Profile>

      <ProfileContent user={user} />
    </>
  );
}

export default ProfilePage