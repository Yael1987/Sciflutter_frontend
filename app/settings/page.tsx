import dynamic from "next/dynamic";

const DynamicUserSettings = dynamic(()=>import('./_components/userSettings'), {ssr: false})

const Page: React.FC = () => {
  return (
    <DynamicUserSettings />
  );
}

export default Page