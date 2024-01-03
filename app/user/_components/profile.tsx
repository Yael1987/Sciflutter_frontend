import '@/styles/components/profile.scss'
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart'
import { PenNib } from '@phosphor-icons/react/dist/ssr/PenNib'
import { Users } from '@phosphor-icons/react/dist/ssr/Users'
import Image from 'next/image'
import { User } from '@/app/_interfaces/api'
interface Props {
  user: User,
  children?: React.ReactNode
}

const Profile: React.FC<Props> = ({ user, children }) => {
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

            <p>230</p>
          </li>

          <li className="profile__stat">
            <PenNib size={56} className="profile__stat-icon" weight="light" />

            <p>10</p>
          </li>

          <li className="profile__stat">
            <Users size={56} className="profile__stat-icon" weight="light" />

            <p>103</p>
          </li>
        </ul>

        {children}
      </div>
    </section>
  );
}

export default Profile