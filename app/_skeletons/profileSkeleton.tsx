import React from 'react'

import '@/styles/components/skeletons.scss'

const ProfileSkeleton: React.FC = () => {
  return (
    <div className='skeleton--profile'>
      <div className='skeleton--profile__pictures'>
        <div className="skeleton--profile__picture skeleton--profile__picture--cover">
        </div>

        <div className="skeleton--profile__picture skeleton--profile__picture--profile">
        </div>
      </div>

      <div className='skeleton--profile__info'></div>
    </div>
  )
}

export default ProfileSkeleton