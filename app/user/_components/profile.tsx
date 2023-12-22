import React from 'react'

import { type AuthorsPreviewI } from '@/app/_interfaces'

import '@/styles/components/profile.scss'
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart'
import { PenNib } from '@phosphor-icons/react/dist/ssr/PenNib'
import { Users } from '@phosphor-icons/react/dist/ssr/Users'
import Image from 'next/image'

interface Props {
  user: AuthorsPreviewI
}

const Profile: React.FC<Props> = ({ user }) => {
  
  return (
    <section className="profile">
      <div className="profile__pictures">
        <div className="profile__picture profile__picture--cover">
          <Image src={user.photos.cover} alt='user cover picture' width={1200} height={600}/>
        </div>

        <div className="profile__picture profile__picture--profile">
          <Image src={user.photos.profile} alt='user profile picture' width={250} height={250}/>
        </div>
      </div>

      <div className="profile__info">
        <div className="profile__text">
          <h1 className="profile__info-name">
            {user.name} {user.lastName}
          </h1>
          <h1 className="profile__info-discipline">{user.discipline}</h1>
        </div>

        <ul className="profile__stats">
          <li className="profile__stat">
            <Heart size={56} className="profile__stat-icon" weight="light" />

            <p>{user.likes}</p>
          </li>

          <li className="profile__stat">
            <PenNib size={56} className="profile__stat-icon" weight="light" />

            <p>{user.articles}</p>
          </li>

          <li className="profile__stat">
            <Users size={56} className="profile__stat-icon" weight="light" />

            <p>{user.followers}</p>
          </li>
        </ul>

        <section className="container container--buttons">
          <button className="btn btn--unfollow">
            Dejar de seguir <i className="ph ph-user-minus"></i>
          </button>
          {/* <button className="btn btn--follow">Seguir autor <i className="ph ph-user-plus"></i></button> */}
          <a href="#" className="btn btn-link btn-link--main">
            Mensaje <i className="ph ph-chat"></i>
          </a>
        </section>
      </div>
    </section>
  );
}

export default Profile