import { getUser } from '@/app/_actions/userActions';
import dynamic from 'next/dynamic';
import { User } from '@/app/_interfaces/api';
import ProfileSkeleton from '@/app/_skeletons/profileSkeleton';
import { revalidateTag } from 'next/cache';

const DynamicProfile = dynamic(() => import('../_components/profilePage'), { loading: () => <ProfileSkeleton/> })

interface Props{
  params: {
    userId: string
  }
}

const Page: React.FC<Props> = async ({ params }) => {
  const apiResponse = await getUser(params.userId)
  
  revalidateTag('users')

  if (!apiResponse.success && !apiResponse.user) return <p>Usuario no encontrado</p>

  return (
    <DynamicProfile user={apiResponse.user!} />
  )
}

export default Page