import '@/styles/components/profile.scss'
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart'
import { PenNib } from '@phosphor-icons/react/dist/ssr/PenNib'
import { Users } from '@phosphor-icons/react/dist/ssr/Users'
import Image from 'next/image'
import { User } from '@/app/_interfaces/api'
import ProfileStats from './profileStats'
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

        {user.role === 'author' && (
          <ProfileStats userId={user._id} />
        )}

        {children}
      </div>
    </section>
  );
}

export default Profile