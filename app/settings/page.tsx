import dynamic from "next/dynamic";
import UserSettingsSkeleton from "../_skeletons/userSettingsSkeleton";

const DynamicUserSettings = dynamic(() => import('./_components/userSettings'), { ssr: false, loading: () => <UserSettingsSkeleton /> })

const Page: React.FC = () => {
  return (
    <DynamicUserSettings />
  );
}

export default Page