import dynamic from "next/dynamic";

const DynamicUserSettings = dynamic(()=>import('./_components/userSettings'), {ssr: false})

const Page: React.FC = () => {
  return (
    <>
      <p className="settings-section-heading--main">User</p>

      <DynamicUserSettings />
    </>
  );
}

export default Page