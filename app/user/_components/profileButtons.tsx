"use client"
import { User } from '@/app/_interfaces/api';
import { BaseComponent } from '@/app/_interfaces/components';
import { UserStore, useUserStore } from '@/app/_store/userStore';
import React from 'react'

interface Props extends BaseComponent {
  user: User;
}

const ProfileButtons: React.FC<Props> = ({ user, children }) => {
  const currentUser = useUserStore((state: UserStore) => state.user);


  if(currentUser?._id === user._id) return null

  return (
    <section className="container container--buttons">
      {children}
    </section>
  );
}

export default ProfileButtons