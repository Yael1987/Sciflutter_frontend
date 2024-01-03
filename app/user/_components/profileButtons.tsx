"use client"
import { User } from '@/app/_interfaces/api';
import { UserStore, useUserStore } from '@/app/_stores/userStore';
import React from 'react'

interface Props {
  user: User;
}

const ProfileButtons: React.FC<Props> = ({user}) => {
  const currentUser = useUserStore((state: UserStore) => state.user);

  if(currentUser?._id === user._id) return null

  return (
    <section className="container container--buttons">
      <button className="btn btn--unfollow">
        Dejar de seguir <i className="ph ph-user-minus"></i>
      </button>
      {/* <button className="btn btn--follow">Seguir autor <i className="ph ph-user-plus"></i></button> */}
      <a href="#" className="btn btn-link btn-link--main">
        Mensaje <i className="ph ph-chat"></i>
      </a>
    </section>
  );
}

export default ProfileButtons