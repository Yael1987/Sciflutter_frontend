import type { User } from '@/app/_interfaces/api';

import { getLoggedUser } from "@/app/_actions/userActions";

import "@/styles/components/profile-buttons.scss";
import dynamic from 'next/dynamic';

const Follow = dynamic(() => import('@/app/_components/buttons').then((data) => data.Follow))

interface Props{
  user: User;
  follow: boolean;
}

const ProfileButtons: React.FC<Props> = async ({ user, follow }) => {
  const currentUser = await getLoggedUser();

  if (currentUser?._id === user._id) return null

  return (
    <section className="c-profile-buttons">
      <Follow follow={follow} userId={user._id} />
    </section>
  );
}

export default ProfileButtons