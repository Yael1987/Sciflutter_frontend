"use server"
import Notification from "@/app/_components/notification";

import { confirmAccount } from "@/app/_actions/authActions";
import ButtonLink from "@/app/_components/buttonLink";
import Button from "@/app/_components/button";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";

interface Props {
  params: {
    token: string;
  };
}

const Page: React.FC<Props> = async ({ params }) => {
  const apiResponse = await confirmAccount(params.token)

  if(apiResponse.success) return (
    <>
      <Notification type="success">
        {apiResponse.message}
      </Notification>

      <ButtonLink href="/" type="outline"><ArrowLeft size={32}/> Volver al inicio</ButtonLink>
    </>
  );

  return (
    <>
      <Notification type="error">
        {apiResponse.message}
      </Notification>

      <ButtonLink href="/" type="outline"><ArrowLeft size={24}/> Volver al inicio</ButtonLink>
    </>
  );
};

export default Page;
