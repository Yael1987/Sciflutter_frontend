import { getUserStats } from '@/app/_actions/userActions';
import { Heart } from '@phosphor-icons/react/dist/ssr/Heart';
import { PenNib } from '@phosphor-icons/react/dist/ssr/PenNib';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';

interface Props{
  userId: string
}

const ProfileStats: React.FC<Props> = async ({ userId }) => {
  const apiResponse = await getUserStats(userId)
  const stats = await apiResponse.data.userStats[0];

  return (
    <ul className="profile__stats">
      <li className="profile__stat">
        <Heart size={56} className="profile__stat-icon" weight="light" />

        <p>{stats.likes}</p>
      </li>

      <li className="profile__stat">
        <PenNib size={56} className="profile__stat-icon" weight="light" />

        <p>{stats.articles}</p>
      </li>

      <li className="profile__stat">
        <Users size={56} className="profile__stat-icon" weight="light" />

        <p>{stats.followers}</p>
      </li>
    </ul>
  );
}

export default ProfileStats