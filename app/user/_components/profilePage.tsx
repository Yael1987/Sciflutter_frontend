import { User } from '@/app/_interfaces/api'
import React from 'react'
import Profile from './profile'
import ProfileContent from './profileContent'
import dynamic from 'next/dynamic'
import { checkCookieExist } from '@/app/_actions/authActions'
import { checkAuthorFollow } from '@/app/_actions/featuresActions'

const DynamicProfileButtons = dynamic(() => import('./profileButtons'), {ssr: false})

interface Props{
  user: User
}

const ProfilePage: React.FC<Props> = async ({ user }) => {  
  const apiResponse = await checkAuthorFollow(user._id)
  const followButton = apiResponse.data.follow ? (
    <button className="btn btn--unfollow">
      Dejar de seguir <i className="ph ph-user-minus"></i>
    </button>
  ) : (
    <button className="btn btn--follow">
      Seguir autor <i className="ph ph-user-plus"></i>
    </button>
  );

  return (
    <>
      <Profile user={user}>
        {checkCookieExist() && (
          <DynamicProfileButtons user={user}>
            {followButton}
            <a href="/chats" className="btn btn-link btn-link--main">
              Mensaje <i className="ph ph-chat"></i>
            </a>
          </DynamicProfileButtons>
        )}
      </Profile>

      <ProfileContent user={user} />
    </>
  );
}

export default ProfilePage