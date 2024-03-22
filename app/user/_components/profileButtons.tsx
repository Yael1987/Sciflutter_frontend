"use client"
import { useState } from 'react';

import { followAuthor, unfollowAuthor } from '@/app/_actions/featuresActions';

import type { User } from '@/app/_interfaces/api';

import { UserStore, useUserStore } from '@/app/_store/userStore';

interface Props{
  user: User;
  follow: boolean;
}

import '@/styles/components/profile-buttons.scss';

const ProfileButtons: React.FC<Props> = ({ user, follow }) => {
  const [isFollow, setIsFollow] = useState<boolean>(follow);
  const currentUser = useUserStore((state: UserStore) => state.user);

  if (currentUser?._id === user._id) return null
  
  const onFollow = async () => {
    const apiResponse = await followAuthor(user._id)

    if (!apiResponse.success) return
    
    setIsFollow(true)
  }

  const onUnfollow = async () => {
    const apiResponse = await unfollowAuthor(user._id)

    if (!apiResponse.success) return
    
    setIsFollow(false)
  }

  const handleFollowButton = async () => {
    if (isFollow) await onUnfollow()
    else await onFollow()
  }

  return (
    <section className="c-profile-buttons">
      <button data-style={isFollow ? "secondary" : "primary"} onClick={handleFollowButton}>
        <span>{isFollow ? "Unfollow author" : "Follow author"}</span>
      </button>
    </section>
  );
}

export default ProfileButtons