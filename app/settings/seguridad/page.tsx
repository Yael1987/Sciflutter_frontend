import dynamic from "next/dynamic";
import PrivacitySettings from "../_components/privacitySettings";

const DynamicPrivacitySettings = dynamic(()=>import('../_components/privacitySettings'), {ssr: false})

const Page: React.FC = () => {
  return (
    <PrivacitySettings/>
  )
};

export default Page