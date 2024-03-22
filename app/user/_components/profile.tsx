import '@/styles/components/profile.scss'
import Image from 'next/image'
import { User } from '@/app/_interfaces/api'
import ProfileStats from './profileStats'
interface Props {
  user: User,
  children?: React.ReactNode
}

const Profile: React.FC<Props> = ({ user, children }) => {
  return (
    <section className="c-profile">
      <div className="c-profile__pictures">
        <div className="c-profile__picture_cover">
          <Image src={user.photos.cover} alt='user cover picture' width={1200} height={600}/>
        </div>

        <div className="c-profile__picture_profile">
          <Image src={user.photos.profile} alt='user profile picture' width={250} height={250}/>
        </div>
      </div>

      <div className="c-profile__info">
        <div className="c-profile__text">
          <h1 className="c-profile__info-name">
            {user.name} {user.lastName}
          </h1>
          
          {user.discipline && <p className="c-profile__info-discipline">{user.discipline}</p>}
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